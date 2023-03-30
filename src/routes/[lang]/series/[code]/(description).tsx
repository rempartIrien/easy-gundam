import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";

import MarkdownViewer from "~/components/MarkdownViewer";

import type { routeData as parentRouteData } from "../[code]";

export function routeData({ data }: RouteDataArgs<typeof parentRouteData>) {
	return data;
}

export default function SeriesDescription() {
	const series = useRouteData<typeof routeData>();
	return (
		<Show when={series()}>
			<MarkdownViewer content={series()?.description} />
		</Show>
	);
}
