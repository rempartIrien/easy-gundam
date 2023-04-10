import type { JSX } from "solid-js";
import { Show, Suspense } from "solid-js";
import { createServerData$ } from "solid-start/server";

import { getLocale } from "~/i18n/i18n.cookie";
import { retrieveTranslsations } from "~/i18n/i18n.server";
import { getColorScheme } from "~/theme/theme.cookie";

import "./HtmlRoot.css";
import Providers from "./Providers";

interface RootProps {
	children: JSX.Element;
}

export default function HtmlRoot(props: RootProps) {
	const init = createServerData$(
		async (_, { request }) => {
			const [dict, locale, themeName] = await Promise.all([
				retrieveTranslsations(),
				getLocale(request),
				getColorScheme(request),
			]);
			return { dict, locale, themeName };
		},
		{ key: () => "init" },
	);

	return (
		<Suspense>
			<Show when={init()}>
				<Providers initialProps={init()}>{props.children}</Providers>
			</Show>
		</Suspense>
	);
}
