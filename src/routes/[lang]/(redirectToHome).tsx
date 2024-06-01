import type { Params, RouteDefinition } from "@solidjs/router";
import { cache, redirect } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import { isLanguage } from "~/i18n/i18n.config";

// eslint-disable-next-line @typescript-eslint/require-await
const routeData = cache(async (params: Params) => {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	throw redirect(`/${params.lang}/home`);
}, "redirectToHome");

export const route = {
	load: ({ params }) => routeData(params),
} satisfies RouteDefinition;

export default function Index() {
	// Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
	const data = useLocalizedRouteData(routeData);
	return (
		<Show when={data()}>
			<div>Redirecting...</div>
		</Show>
	);
}
