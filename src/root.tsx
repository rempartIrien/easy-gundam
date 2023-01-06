// @refresh reload
import { Routes } from "@solidjs/router";
import { Suspense, createEffect, createMemo, useContext } from "solid-js";
import { Body, FileRoutes, Head, Html, Meta, Scripts } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerData$ } from "solid-start/server";

import ErrorPage from "./components/ErrorPage";
import { LocaleContext } from "./contexts/LocaleContext";
import type { Language } from "./i18n/i18n.config";
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

  const [, updateLocale] = useContext(LocaleContext);

  createEffect(() => {
    if (!locale.loading) {
      updateLocale(locale() as Language);
    }
  });

  return (
    <Suspense>
      <Html lang={locale()}>
        <Head>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body class={className()}>
          <ErrorBoundary
            fallback={() => <ErrorPage initialLocale={locale() as Language} />}
          >
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
          <Scripts />
        </Body>
      </Html>
    </Suspense>
  );
}
