import type { Params, RouteDefinition } from "@solidjs/router";
import { cache, createAsync, redirect, useParams } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import { type Language, isLanguage } from "~/i18n/i18n.config";

const routeData = cache((locale: Language) => {
	"use server";
	throw redirect(`/${locale}/home`);
}, "redirectToHome");

// eslint-disable-next-line @typescript-eslint/require-await
async function loadFunction(params: Params) {
	invariant(isLanguage(params.lang), "Expected params.lang");

	return routeData(params.lang);
}

export const route = {
	load: ({ params }) => loadFunction(params),
} satisfies RouteDefinition;

export default function Index() {
	// Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
	const params = useParams();
	const data = createAsync(() => loadFunction(params));
	return (
		<Show when={data()}>
			<div>Redirecting...</div>
		</Show>
	);
}
