import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";

import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";

import type { routeData as parentRouteData } from "../[seriesCode]";

export function routeData({ data }: RouteDataArgs<typeof parentRouteData>) {
	return data;
}

export default function SeriesInsights() {
	const series = useRouteData<typeof routeData>();
	return (
		<Section>
			<Show when={series()?.insights} keyed>
				{(insights) => <MarkdownViewer content={insights} />}
			</Show>
		</Section>
	);
}