import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";

import MarkdownViewer from "~/components/MarkdownViewer";

import type { routeData as parentRouteData } from "../[code]";

export function routeData({ data }: RouteDataArgs<typeof parentRouteData>) {
	return data;
}

export default function TimelineDescription() {
	const timeline = useRouteData<typeof routeData>();
	return (
		<Show when={timeline()}>
			<MarkdownViewer content={timeline()?.description} />
		</Show>
	);
}
