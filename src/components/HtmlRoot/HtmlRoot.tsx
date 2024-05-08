import { createAsync } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show, Suspense } from "solid-js";

import { getLocale } from "~/i18n/i18n.cookie";
import { retrieveTranslsations } from "~/i18n/i18n.server";
import { getColorScheme } from "~/theme/theme.cookie";

import Providers from "./Providers";

import "./HtmlRoot.css";

interface RootProps {
	children: JSX.Element;
}

const initFunction = async () => {
	const [dict, locale, themeName] = await Promise.all([
		retrieveTranslsations(),
		getLocale(),
		getColorScheme(),
	]);
	return { dict, locale, themeName };
};

export default function HtmlRoot(props: RootProps) {
	const init = createAsync(async () => initFunction());

	return (
		<Suspense>
			<Show when={init()}>
				<Providers initialProps={init()}>{props.children}</Providers>
			</Show>
		</Suspense>
	);
}
