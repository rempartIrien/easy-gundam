import { For, Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import { listAdaptations } from "~/graphql/adaptation.server";
import type { Language } from "~/i18n/i18n.config";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.code, "Expected params.code");
	const series = createServerData$(
		async ([locale, , code]: string[]) => {
			return listAdaptations(code, locale as Language);
		},
		{ key: () => [params.lang, "series", params.code, "adaptations"] },
	);
	return series;
}

export default function SeriesAdaptations() {
	const adaptations = useRouteData<typeof routeData>();
	return (
		<Show when={adaptations()}>
			<For each={adaptations()}>
				{(adaptation) => <li>{adaptation.title}</li>}
			</For>
		</Show>
	);
}
