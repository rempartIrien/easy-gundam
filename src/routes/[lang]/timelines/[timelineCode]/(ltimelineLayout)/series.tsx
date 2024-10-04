import type { Params, RouteDefinition } from "@solidjs/router";
import { cache } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import { listSeries } from "~/api/series.server";
import Chronology from "~/components/Chronology";
import DocumentTitle from "~/components/DocumentTitle";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { getTimeline } from "../timeline.server";

const routeData = cache(async (params: Params) => {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");

	const timeline = await getTimeline(params.timelineCode, params.lang);
	const series = await listSeries(params.timelineCode, params.lang);
	return { timeline, series };
}, "timelineSeries");

export const route = {
	preload: ({ params }) => routeData(params),
} as RouteDefinition;

export default function TimelineSeries() {
	const data = useLocalizedRouteData(routeData);
	const t = useTranslation();
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
