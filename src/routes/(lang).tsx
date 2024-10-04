import { cache, createAsync, redirect } from "@solidjs/router";
import { Show } from "solid-js";

import { getLocale } from "~/i18n/i18n.cookie";

const routeData = cache(() => {
	"use server";

	const locale = getLocale();
	return redirect(`/${locale}/home`);
}, "lang");

export const route = {
	preload: () => routeData(),
};

export default function Index() {
	// Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
	const data = createAsync(() => routeData());
	return (
		<Show when={data()}>
			<div>Redirecting...</div>
		</Show>
	);
}
