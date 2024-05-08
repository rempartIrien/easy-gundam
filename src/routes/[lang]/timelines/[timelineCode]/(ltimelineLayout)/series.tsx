import type { Params, RouteDefinition } from "@solidjs/router";
import { cache, createAsync, useParams } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import { listSeries } from "~/api/series.server";
import Chronology from "~/components/Chronology";
import DocumentTitle from "~/components/DocumentTitle";
import useTranslation from "~/hooks/useTranslation";
import { type Language, isLanguage } from "~/i18n/i18n.config";

import { getTimeline } from "../timeline.server";

const routeData = cache((code: string, locale: Language) => {
	"use server";
	return listSeries(code, locale);
}, "timelineSeries");

async function loadFunction(params: Params) {
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");

	const timeline = await getTimeline(params.timelineCode, params.lang);
	const series = await routeData(params.timelineCode, params.lang);
	return { timeline, series };
}

export const route = {
	load: ({ params }) => loadFunction(params),
} as RouteDefinition;

export default function TimelineSeries() {
	const params = useParams();
	const data = createAsync(() => loadFunction(params));
	const [t] = useTranslation();
	return (
		<Show when={data()?.timeline}>
			{(nonNullTimeline) => (
				<>
					<DocumentTitle
						content={[
							nonNullTimeline().name,
							t("timelines.details.series.documentTitle"),
						]}
					/>
					<Chronology
						timelineCode={nonNullTimeline().code}
						items={data()?.series}
					/>
				</>
			)}
		</Show>
	);
}
