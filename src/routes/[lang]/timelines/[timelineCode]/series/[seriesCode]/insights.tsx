import type { Params, RouteDefinition } from "@solidjs/router";
import { Navigate, createAsync, useParams } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { getSeries } from "../series.server";

const routeData = getSeries;

function loadFunction(params: Params) {
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");

	return routeData(params.seriesCode, params.lang);
}
export const route = {
	load: ({ params }) => loadFunction(params),
} satisfies RouteDefinition;

export default function SeriesInsights() {
	const params = useParams();
	const series = createAsync(() => loadFunction(params));
	const t = useTranslation();
	return (
		<Show when={series()}>
			{(nonNullSeries) => (
				<>
					<DocumentTitle
						content={[
							nonNullSeries().title,
							t("series.details.insights.documentTitle"),
						]}
					/>
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
