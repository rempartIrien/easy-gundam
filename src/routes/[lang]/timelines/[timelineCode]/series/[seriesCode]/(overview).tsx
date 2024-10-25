import type { Params, RouteDefinition } from "@solidjs/router";
import { cache } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import Adaptations from "~/components/Adaptations";
import DocumentTitle from "~/components/DocumentTitle";
import Image from "~/components/Image";
import MarkdownViewer from "~/components/MarkdownViewer";
import Staff from "~/components/Staff";
import { listAdaptations } from "~/graphql/adaptation.server";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { getSeries } from "../series.server";

const routeData = cache(async (params: Params) => {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");
	const series = await getSeries(params.seriesCode, params.lang);
	const adaptations = await listAdaptations(params.seriesCode, params.lang);
	return { series, adaptations };
}, "overview");

export const route = {
	preload: ({ params }) => {
		return routeData(params);
	},
} satisfies RouteDefinition;

export default function SeriesOverview() {
	const data = useLocalizedRouteData(routeData);
	const t = useTranslation();
	return (
		<Show when={data()?.series}>
			{(nonNullSeries) => (
				<>
					<DocumentTitle
						content={[
							nonNullSeries().title,
							t("series.details.overview.documentTitle"),
						]}
					/>
					<section class="mb-sectionBottom flex w-full flex-col items-center gap-4f lg:flex-row lg:items-start">
						<Show when={nonNullSeries().image}>
							{(i) => (
								<div class="lg:sticky lg:top-10r">
									<Image
										imageId={i().id}
										alt={i().description || nonNullSeries().title || ""}
										size="medium"
									/>
								</div>
							)}
						</Show>
						<div class="text-block flex-1">
							<Show when={nonNullSeries().synopsis}>
								{(s) => (
									<section class="mb-sectionBottom">
										<MarkdownViewer content={s()} />
									</section>
								)}
							</Show>
							<Show when={nonNullSeries().staff}>
								{(s) => (
									<section class="mb-sectionBottom">
										<Staff staff={s()} />
									</section>
								)}
							</Show>
							<Show when={data()?.adaptations}>
								{(a) => <Adaptations adaptations={a()} />}
							</Show>
						</div>
					</section>
				</>
			)}
		</Show>
	);
}
