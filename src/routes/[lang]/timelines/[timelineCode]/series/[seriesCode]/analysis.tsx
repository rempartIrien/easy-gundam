import type { Params, RouteDefinition } from "@solidjs/router";
import { Navigate } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { getSeries } from "../series.server";

function routeData(params: Params) {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");

	return getSeries(params.seriesCode, params.lang);
}
export const route = {
	load: ({ params }) => routeData(params),
} satisfies RouteDefinition;

export default function SeriesAnalysis() {
	const series = useLocalizedRouteData(routeData);
	const t = useTranslation();
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
