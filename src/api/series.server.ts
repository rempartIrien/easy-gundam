import {
	getSeriesByCode as graphQLGetSeriesByCode,
	listSeries as graphQLListSeries,
} from "~/graphql/series.server";
import type { Language } from "~/i18n/i18n.config";

import convertLinks from "./convertLinks.server";

export function listSeries(timelineCode: string, language: Language) {
	return graphQLListSeries(timelineCode, language);
}

export async function getSeriesByCode(code: string, locale: Language) {
	const series = await graphQLGetSeriesByCode(code, locale);
	return {
		...series,
		synopsis: await convertLinks(series.synopsis || "", locale),
		staff: await convertLinks(series.staff || "", locale),
		insights: await convertLinks(series.insights || "", locale),
		analysis: await convertLinks(series.analysis || "", locale),
	};
}
