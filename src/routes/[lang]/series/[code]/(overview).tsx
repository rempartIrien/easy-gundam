import { For, Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import List from "~/components/List";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import { listAdaptations } from "~/graphql/adaptation.server";
import type { Language } from "~/i18n/i18n.config";

import type { routeData as parentRouteData } from "../[code]";

export function routeData({
	params,
	data: series,
}: RouteDataArgs<typeof parentRouteData>) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.code, "Expected params.code");
	const adaptations = createServerData$(
		async ([locale, , code]: string[]) => {
			return listAdaptations(code, locale as Language);
		},
		{ key: () => [params.lang, "series", params.code, "adaptations"] },
	);
	return { series, adaptations };
}

export default function SeriesOverview() {
	const { series, adaptations } = useRouteData<typeof routeData>();
	return (
		<Section>
			<Show when={series()}>
				<MarkdownViewer content={series()?.description} />
			</Show>
			<Show when={adaptations()}>
				<List>
					<For each={adaptations()}>
						{(adaptation) => <li>{adaptation.title}</li>}
					</For>
				</List>
			</Show>
		</Section>
	);
}
