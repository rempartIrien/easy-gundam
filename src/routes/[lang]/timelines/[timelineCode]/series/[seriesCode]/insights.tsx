import { useI18n } from "@solid-primitives/i18n";
import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { Navigate } from "solid-start";
import { useRouteData } from "solid-start";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";

import type { routeData as parentRouteData } from "../[seriesCode]";

export function routeData({ data }: RouteDataArgs<typeof parentRouteData>) {
	return data;
}

export default function SeriesInsights() {
	const series = useRouteData<typeof routeData>();
	const [t] = useI18n();
	return (
		<Show when={series()}>
			{(nonNullSeries) => (
				<>
					<DocumentTitle>
						{`${nonNullSeries().title} - ${String(
							t("series.details.insights.documentTitle"),
						)}`}
					</DocumentTitle>
					<Section>
						<Show when={series()?.insights} fallback={<Navigate href=".." />}>
							<MarkdownViewer content={series()?.insights} />
						</Show>
					</Section>
				</>
			)}
		</Show>
	);
}
