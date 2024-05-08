import type { Params, RouteDefinition } from "@solidjs/router";
import { cache, createAsync, useParams } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import Adaptations from "~/components/Adaptations";
import DocumentTitle from "~/components/DocumentTitle";
import Image from "~/components/Image";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import Staff from "~/components/Staff";
import { listAdaptations } from "~/graphql/adaptation.server";
import useTranslation from "~/hooks/useTranslation";
import { type Language, isLanguage } from "~/i18n/i18n.config";

import { getSeries } from "../series.server";

import {
	adaptationsStyle,
	containerstyle,
	imageStyle,
	staffStyle,
	synopsisStyle,
	textBlockStyle,
} from "./(overview).css";

const routeData = (code: string, locale: Language) => {
	"use server";
	return listAdaptations(code, locale);
};

const loadFunction = cache(async (params: Params) => {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");
	const series = await getSeries(params.seriesCode, params.lang);
	const adaptations = await routeData(params.seriesCode, params.lang);
	return { series, adaptations };
}, "foo");

export const route = {
	load: ({ params }) => {
		return loadFunction(params);
	},
} satisfies RouteDefinition;

export default function SeriesOverview() {
	const params = useParams();
	const data = createAsync(() => loadFunction(params));
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
					<Section class={containerstyle}>
						<Show when={nonNullSeries().image}>
							{(i) => (
								<Image
									class={imageStyle}
									imageId={i().id}
									alt={i().description || nonNullSeries().title || ""}
									size="medium"
								/>
							)}
						</Show>
						<div class={textBlockStyle}>
							<Show when={nonNullSeries().synopsis}>
								{(s) => (
									<section class={synopsisStyle}>
										<MarkdownViewer class={synopsisStyle} content={s()} />
									</section>
								)}
							</Show>
							<Show when={nonNullSeries().staff}>
								{(s) => <Staff class={staffStyle} staff={s()} />}
							</Show>
							<Show when={data()?.adaptations}>
								{(a) => (
									<Adaptations class={adaptationsStyle} adaptations={a()} />
								)}
							</Show>
						</div>
					</Section>
				</>
			)}
		</Show>
	);
}
