import { I18nProvider as KobalteI18nProvider } from "@kobalte/core";
import { MetaProvider } from "@solidjs/meta";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { createSignal } from "solid-js";

import { I18nProvider } from "~/contexts/I18nContext";
import { LocaleContext } from "~/contexts/LocaleContext";
import { ThemeContext } from "~/contexts/ThemeContext";
import type { Language } from "~/i18n/i18n.config";
import type { I18nDictionary } from "~/i18n/i18n.server";
import { darkTheme } from "~/theme/dark-theme.css";
import { defaultTheme } from "~/theme/default-theme.css";
import { lightTheme } from "~/theme/light-theme.css";
import { ThemeName } from "~/theme/ThemeName";

import { htmlRootStyle } from "./HtmlRoot.css";

// using a function in `Show` create hydration issues, so this component is here
// to allow signal creations "inside" JSX.
export default function Providers(props: {
	initialProps:
		| {
				dict: I18nDictionary;
				locale: Language;
				themeName: ThemeName | null;
		  }
		| undefined;
	children: JSX.Element;
}) {
	const [themeName, setThemeName] = createSignal<ThemeName | null | undefined>(
		props.initialProps?.themeName,
	);
	const [locale, setlocale] = createSignal<Language | undefined>(
		props.initialProps?.locale,
	);

	return (
		<MetaProvider>
			<ThemeContext.Provider value={[themeName, setThemeName]}>
				<LocaleContext.Provider value={[locale, setlocale]}>
					<I18nProvider value={props.initialProps?.dict}>
						<KobalteI18nProvider locale={locale()}>
							<html
								lang={locale()}
								class={clsx([
									htmlRootStyle,
									themeName() === ThemeName.Dark && darkTheme,
									themeName() === ThemeName.Light && lightTheme,
									!themeName() && defaultTheme,
								])}
							>
								{props.children}
							</html>
						</KobalteI18nProvider>
					</I18nProvider>
				</LocaleContext.Provider>
			</ThemeContext.Provider>
		</MetaProvider>
	);
}
