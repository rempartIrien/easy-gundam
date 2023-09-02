import { Show } from "solid-js";
import type { RouteDataFuncArgs } from "solid-start";
import { Navigate, useRouteData } from "solid-start";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import useTranslation from "~/hooks/useTranslation";

import type { routeData as parentRouteData } from "../[seriesCode]";

export function routeData({ data }: RouteDataFuncArgs<typeof parentRouteData>) {
	return data;
}

export default function SeriesAnalysis() {
	const series = useRouteData<typeof routeData>();
	const [t] = useTranslation();
	return (
		<Show when={series()}>
			{(nonNullSeries) => (
				<>
					<DocumentTitle
						content={[
							nonNullSeries().title,
							t("series.details.analysis.documentTitle"),
						]}
					/>
					<Section>
						<Show when={series()?.analysis} fallback={<Navigate href=".." />}>
							<MarkdownViewer content={series()?.analysis} />
						</Show>
					</Section>
				</>
			)}
		</Show>
	);
}
