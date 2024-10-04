import type { Params, RouteDefinition } from "@solidjs/router";
import { cache, redirect } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show } from "solid-js";

import CenterContent from "~/components/CenterContent";
import DocumentTitle from "~/components/DocumentTitle";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import { LanguageNames } from "~/i18n/i18n.config";
import { getLocale } from "~/i18n/i18n.cookie";

import {
	containerStyle,
	contentStyle,
	footerStyle,
	headerStyle,
} from "./[lang].css";

// eslint-disable-next-line @typescript-eslint/require-await
const routeData = cache(async (params: Params) => {
	"use server";

	const locale = getLocale();
	if (!Object.keys(LanguageNames).includes(params.lang)) {
		throw redirect(`/${locale}/home`);
	}
	return locale;
}, "lang");

export const route = {
	preload: ({ params }) => routeData(params),
} satisfies RouteDefinition;

interface I18nLayoutProps {
	children: JSX.Element;
}

export default function I18nLayout(props: I18nLayoutProps) {
	// Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
	const data = useLocalizedRouteData(routeData);

	return (
		<Show when={data()}>
			<section class={containerStyle}>
				<DocumentTitle />
				<Header class={headerStyle} />
				<CenterContent class={contentStyle}>{props.children}</CenterContent>
				<Footer class={footerStyle} />
			</section>
		</Show>
	);
}
