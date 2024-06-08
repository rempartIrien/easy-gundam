import { I18nProvider as KobalteI18nProvider } from "@kobalte/core";
import { MetaProvider } from "@solidjs/meta";
import { cache, createAsync } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show, Suspense, createSignal, onMount } from "solid-js";

import { I18nProvider } from "~/contexts/I18nContext";
import { LocaleContext } from "~/contexts/LocaleContext";
import { ThemeContext } from "~/contexts/ThemeContext";
import { ToasterProvider } from "~/contexts/ToasterContext";
import type { Language } from "~/i18n/i18n.config";
import { getLocale } from "~/i18n/i18n.cookie";
import { retrieveTranslsations } from "~/i18n/i18n.server";
import getHtmlTagClasses from "~/theme/getHtmlTagClasses";
import { getColorScheme } from "~/theme/theme.cookie";
import type { ThemeName } from "~/theme/ThemeName";

const initFunction = async () => {
	"use server";
	const [dict, locale, themeName] = await Promise.all([
		retrieveTranslsations(),
		getLocale(),
		getColorScheme(),
	]);
	return { dict, locale, themeName };
};

const load = cache(() => initFunction(), "init");

export default function Providers(props: { children: JSX.Element }) {
	const init = createAsync(() => load());

	return (
		<Suspense>
			<Show when={init()}>
				{(resvoledInit) => {
					// Initialize signals here to giev them right default values.
					const [themeName, setThemeNameBase] = createSignal<
						ThemeName | null | undefined
					>(resvoledInit().themeName);
					const [locale, setLocaleBase] = createSignal<Language | undefined>(
						resvoledInit().locale,
					);

					const setThemeName = (theme?: ThemeName | null) => {
						setThemeNameBase(theme);
						// Update html tag classes
						window?.document
							.getElementsByTagName("html")?.[0]
							.setAttribute("class", getHtmlTagClasses(theme));
					};

					const setLocale = (locale?: Language) => {
						setLocaleBase(locale);
						// Update html lang attribute
						locale &&
							window?.document
								.getElementsByTagName("html")?.[0]
								.setAttribute("lang", locale);
					};

					// Hydrate client
					onMount(() => {
						setLocale(resvoledInit().locale);
						setThemeName(resvoledInit().themeName);
					});

					return (
						<MetaProvider>
							<ThemeContext.Provider value={[themeName, setThemeName]}>
								<LocaleContext.Provider value={[locale, setLocale]}>
									<I18nProvider value={resvoledInit().dict}>
										<KobalteI18nProvider locale={locale()}>
											<ToasterProvider>{props.children}</ToasterProvider>
										</KobalteI18nProvider>
									</I18nProvider>
								</LocaleContext.Provider>
							</ThemeContext.Provider>
						</MetaProvider>
					);
				}}
			</Show>
		</Suspense>
	);
}
