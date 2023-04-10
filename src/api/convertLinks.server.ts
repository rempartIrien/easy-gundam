import { getMultiSeriesByCodes } from "~/graphql/series.server";
import { getMultiTimelinesByCodes } from "~/graphql/timeline.server";
import type { Language } from "~/i18n/i18n.config";

type Timeline = Awaited<ReturnType<typeof getMultiTimelinesByCodes>>[number];
type Series = Awaited<ReturnType<typeof getMultiSeriesByCodes>>[number];

type TimelineRecord = Record<Timeline["code"], Timeline>;
type SeriesRecord = Record<Series["code"], Series>;

export default async function convertLinks(
	markdown: string | undefined,
	locale: Language,
) {
	if (!markdown) {
		return "";
	}

	// Gather all links
	const markdownSplitByBrackets = markdown
		.split("{{")
		.map((str) => str.split("}}"));
	const timelinesCodes = markdownSplitByBrackets
		.map(([link]) => link)
		.map((str) => /^\s*timelines\/([^\s]+)\s*/.exec(str))
		.filter((result): result is NonNullable<typeof result> => !!result)
		.map(([, code]) => {
			return code;
		});
	const seriesCodes = markdownSplitByBrackets
		.map(([link]) => link)
		.map((str) => /^\s*series\/([^\s]+)\s*/.exec(str))
		.filter((result): result is NonNullable<typeof result> => !!result)
		.map(([, code]) => {
			return code;
		});

	// Get all entities
	const timelines: Timeline[] = await (timelinesCodes.length
		? getMultiTimelinesByCodes(timelinesCodes, locale)
		: []);
	const series: Series[] = await (seriesCodes.length
		? getMultiSeriesByCodes(seriesCodes, locale)
		: []);

	const timelinesByCode: TimelineRecord = timelines.reduce(
		(acc, cur) => ({ ...acc, [cur.code]: cur }),
		{},
	);
	const seriesByCode: SeriesRecord = series.reduce(
		(acc, cur) => ({ ...acc, [cur.code]: cur }),
		{},
	);

	// Replace all links
	const result = markdownSplitByBrackets
		.map(([head, tail]) => {
			const timelineRegexResult = /^\s*timelines\/([^\s]+)\s*/.exec(head);
			const seriesRegexResult = /^\s*series\/([^\s]+)\s*/.exec(head);
			const timelineLink = generateTimelineLink(
				timelinesByCode,
				timelineRegexResult,
				locale,
			);
			const seriesLink = generateSeriesLink(
				seriesByCode,
				seriesRegexResult,
				locale,
			);
			return [
				timelineLink ? timelineLink : seriesLink ? seriesLink : head,
				tail,
			].join("");
		})
		.join("");

	return result;
}

function generateTimelineLink(
	timelinesByCode: TimelineRecord,
	timelineRegexResult: RegExpExecArray | null,
	locale: Language,
) {
	if (!timelineRegexResult) {
		return undefined;
	}

	const timeline = timelinesByCode[timelineRegexResult[1]];
	if (!timeline) {
		return "";
	}

	return `[${timeline.name}](/${locale}/timelines/${timeline.code})`;
}

function generateSeriesLink(
	seriesByCode: SeriesRecord,
	seriesRegexResult: RegExpExecArray | null,
	locale: Language,
) {
	if (!seriesRegexResult) {
		return undefined;
	}

	const series = seriesByCode[seriesRegexResult[1]];
	if (!series || !series.timeline) {
		return "";
	}

	return `[${series.title}](/${locale}/timelines/${series.timeline.code}/series/${series.code})`;
}
