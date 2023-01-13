import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import type { JSX } from "solid-js";
import { Show, Suspense } from "solid-js";
import { Html } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { LocaleContext } from "../../contexts/LocaleContext";

import { getLocale } from "~/i18n/i18n.cookie";
import { retrieveTranslsations } from "~/i18n/i18n.server";
import { ThemeName, getColorScheme } from "~/theme/theme.cookie";
import { darkTheme, lightTheme } from "~/theme/theme.css";

interface RootProps {
	children: JSX.Element;
}

export default function HtmlRoot(props: RootProps) {
	const dict = createServerData$(async () => {
		return retrieveTranslsations();
	});

	const locale = createServerData$((_, { request }) => getLocale(request), {
		key: "locale",
	});

	const themeName = createServerData$(
		async (_, { request }) => {
			return await getColorScheme(request);
		},
		{
			key: "themeName",
		},
	);

	return (
		<Suspense>
			<Show when={locale()}>
				<Show when={dict()}>
					<LocaleContext.Provider value={locale()}>
						<I18nContext.Provider value={createI18nContext(dict(), locale())}>
							<Html
								lang={locale()}
								class={themeName() === ThemeName.Dark ? darkTheme : lightTheme}
							>
								{props.children}
							</Html>
						</I18nContext.Provider>
					</LocaleContext.Provider>
				</Show>
			</Show>
		</Suspense>
	);
}
