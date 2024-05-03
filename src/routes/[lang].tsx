import type { RouteDefinition } from "@solidjs/router";
import { cache, createAsync, redirect, useParams } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show } from "solid-js";

import CenterContent from "~/components/CenterContent";
import DocumentTitle from "~/components/DocumentTitle";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNmes } from "~/i18n/i18n.config";
import { getLocale } from "~/i18n/i18n.cookie";

import {
	containerStyle,
	contentStyle,
	footerStyle,
	headerStyle,
} from "./[lang].css";

// eslint-disable-next-line @typescript-eslint/require-await
const routeData = cache(async (lang: Language) => {
	"use server";

	const locale = getLocale();
	if (!Object.keys(LanguageNmes).includes(lang)) {
		throw redirect(`/${locale}/home`);
	}
	return locale;
}, "lang");

export const route = {
	load: ({ params }) => routeData(params.lang as Language),
} satisfies RouteDefinition;

interface I18nLayoutProps {
	children: JSX.Element;
}

export default function I18nLayout(props: I18nLayoutProps) {
	// Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
	const params = useParams();
	const data = createAsync(() => routeData(params.lang as Language));

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
