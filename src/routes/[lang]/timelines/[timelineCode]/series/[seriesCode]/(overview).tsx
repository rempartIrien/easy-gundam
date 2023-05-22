import { useI18n } from "@solid-primitives/i18n";
import { For, Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import Image from "~/components/Image";
import List from "~/components/List";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import { listAdaptations } from "~/graphql/adaptation.server";
import type { Language } from "~/i18n/i18n.config";

import type { routeData as parentRouteData } from "../[seriesCode]";

import {
	adaptationsStyle,
	containerstyle,
	imageStyle,
	staffStyle,
	synopsisStyle,
	textBlockStyle,
} from "./(overview).css";

export function routeData({
	params,
	data: series,
}: RouteDataArgs<typeof parentRouteData>) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");
	const adaptations = createServerData$(
		([locale, , code]: string[]) => listAdaptations(code, locale as Language),
		{ key: () => [params.lang, "series", params.seriesCode, "adaptations"] },
	);
	return { series, adaptations };
}

export default function SeriesOverview() {
	const { series, adaptations } = useRouteData<typeof routeData>();
	const [t] = useI18n();
	return (
		<Show when={series()}>
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
								{(s) => <MarkdownViewer class={synopsisStyle} content={s()} />}
							</Show>
							<Show when={nonNullSeries().staff}>
								{(s) => <MarkdownViewer class={staffStyle} content={s()} />}
							</Show>
							<Show when={adaptations()}>
								<List class={adaptationsStyle}>
									<For each={adaptations()}>
										{(adaptation) => <li>{adaptation.title}</li>}
									</For>
								</List>
							</Show>
						</div>
					</Section>
				</>
			)}
		</Show>
	);
}
