// @refresh reload
import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import { Routes } from "@solidjs/router";
import { Suspense, createEffect, createMemo } from "solid-js";
import { Body, FileRoutes, Head, Html, Meta, Scripts } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerData$ } from "solid-start/server";

import Header from "./components/Header";
import { Language } from "./i18n/i18n.config";
import { getLocale } from "./i18n/i18n.cookie";
import { retrieveTranslsations } from "./i18n/i18n.provider";
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

  const dict = createServerData$(async () => retrieveTranslsations(), {
    key: "dict",
  });

  const i18n = createI18nContext({}, Language.French);

  createEffect(() => {
    if (locale()) {
      i18n[1].locale(locale());
    }
  });

  createEffect(() => {
    if (dict()) {
      Object.entries(dict() || {}).map(([key, value]) => {
        i18n[1].add(key, value);
      });
    }
  });

  const className = createMemo(() =>
    themeName() === ThemeName.Dark ? darkTheme : lightTheme,
  );

  return (
    <Suspense>
      <I18nContext.Provider value={i18n}>
        <Html lang={locale()}>
          <Head>
            {/* <Title>{t("appName")}</Title> */}
            <Meta charset="utf-8" />
            <Meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Body class={className()}>
            <ErrorBoundary>
              <Suspense>
                <Header />
                <Routes>
                  <FileRoutes />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Scripts />
          </Body>
        </Html>
      </I18nContext.Provider>
    </Suspense>
  );
}
