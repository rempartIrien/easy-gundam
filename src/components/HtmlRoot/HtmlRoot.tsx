import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { Show, Suspense } from "solid-js";
import { Html } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { ThemeContext } from "~/contexts/ThemeContext";
import { getLocale } from "~/i18n/i18n.cookie";
import { retrieveTranslsations } from "~/i18n/i18n.server";
import { getColorScheme } from "~/theme/theme.cookie";
import { darkTheme, defaultTheme, lightTheme } from "~/theme/theme.css";
import { ThemeName } from "~/theme/ThemeName";

import { LocaleContext } from "../../contexts/LocaleContext";

import { htmlRootStyle } from "./HtmlRoot.css";

import "./HtmlRoot.css";

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
		{ key: "init" },
	);

	return (
		<Suspense>
			<Show when={init()}>
				<ThemeContext.Provider value={init()?.themeName}>
					<LocaleContext.Provider value={init()?.locale}>
						<I18nContext.Provider
							value={createI18nContext(init()?.dict, init()?.locale)}
						>
							<Html
								lang={init()?.locale}
								class={clsx([
									htmlRootStyle,
									init()?.themeName === ThemeName.Dark && darkTheme,
									init()?.themeName === ThemeName.Light && lightTheme,
									!init()?.themeName && defaultTheme,
								])}
							>
								{props.children}
							</Html>
						</I18nContext.Provider>
					</LocaleContext.Provider>
				</ThemeContext.Provider>
			</Show>
		</Suspense>
	);
}
