import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { Outlet, useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";

import CenterContent from "~/components/CenterContent";
import DocumentTitle from "~/components/DocumentTitle";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { LanguageNmes } from "~/i18n/i18n.config";
import { getLocale } from "~/i18n/i18n.cookie";

import {
	containerStyle,
	contentStyle,
	footerStyle,
	headerStyle,
} from "./[lang].css";

export function routeData({ params }: RouteDataArgs) {
	return createServerData$(
		async ([lang], { request }) => {
			const locale = await getLocale(request);
			if (!Object.keys(LanguageNmes).includes(lang)) {
				throw redirect(`/${locale}/home`);
			}
			return true;
		},
		{ key: [params.lang] },
	);
}

export default function I18nLayout() {
	// Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
	const data = useRouteData<typeof routeData>();

	return (
		<Show when={data()}>
			<section class={containerStyle}>
				<DocumentTitle />
				<Header class={headerStyle} />
				<CenterContent class={contentStyle}>
					<Outlet />
				</CenterContent>
				<Footer class={footerStyle} />
			</section>
		</Show>
	);
}
