import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";
import invariant from "tiny-invariant";

import type { Language } from "~/i18n/i18n.config";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	return createServerData$(
		([locale]) => {
			throw redirect(`/${locale as Language}/home`);
		},
		{ key: () => [params.lang] },
	);
}

export default function Index() {
	// Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
	const data = useRouteData<typeof routeData>();
	return (
		<Show when={data()}>
			<div>Redirecting...</div>
		</Show>
	);
}
