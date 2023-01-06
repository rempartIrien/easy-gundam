// @refresh reload
import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import { Routes } from "@solidjs/router";
import { Show, Suspense, createMemo, useContext } from "solid-js";
import { Body, FileRoutes, Head, Html, Meta, Scripts } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerData$ } from "solid-start/server";

import ErrorPage from "./components/ErrorPage";
import { DictionaryContext } from "./contexts/DictionaryContext";
import { LocaleContext } from "./contexts/LocaleContext";
import { getLocale } from "./i18n/i18n.cookie";
import { ThemeName, getColorScheme } from "./theme/theme.cookie";
import { darkTheme, lightTheme } from "./theme/theme.css";

import "./root.css";
import "./font.css";

export default function Root() {
  // Cannot fetch it in routeData as it is not handled by root.tsx at the moment
  // See https://discordapp.com/channels/722131463138705510/910635844119982080/1036479279019606036
  const themeName = createServerData$(
    async (_, { request }) => {
      return await getColorScheme(request);
    },
    {
      key: "themeName",
    },
  );

  const locale = createServerData$((_, { request }) => getLocale(request), {
    key: "locale",
  });

  const className = createMemo(() =>
    themeName() === ThemeName.Dark ? darkTheme : lightTheme,
  );

  const dict = useContext(DictionaryContext);

  return (
    <Suspense>
      <Show when={locale()}>
        <LocaleContext.Provider value={locale()}>
          <I18nContext.Provider value={createI18nContext(dict, locale())}>
            <Html lang={locale()}>
              <Head>
                <Meta charset="utf-8" />
                <Meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
              </Head>
              <Body class={className()}>
                <ErrorBoundary fallback={() => <ErrorPage />}>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </ErrorBoundary>
                <Scripts />
              </Body>
            </Html>
          </I18nContext.Provider>
        </LocaleContext.Provider>
      </Show>
    </Suspense>
  );
}
