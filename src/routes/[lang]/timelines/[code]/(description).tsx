import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";

import type { routeData as parentRouteData } from "../[code]";

export function routeData({ data }: RouteDataArgs<typeof parentRouteData>) {
	return data;
}

export default function TimelineDescription() {
	const timeline = useRouteData<typeof routeData>();
	return (
		<Show when={timeline()}>
			{/* eslint-disable-next-line solid/no-innerhtml */}
			<div innerHTML={timeline()?.description} />
		</Show>
	);
}
