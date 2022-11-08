// @refresh reload
import { useI18n } from "@solid-primitives/i18n";
import { Routes } from "@solidjs/router";
import { Suspense, createEffect, createSignal } from "solid-js";
import { FileRoutes, Head, Meta, Scripts, Title } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerData$ } from "solid-start/server";

import Header from "./components/Header";
import { getColorScheme } from "./cookies/theme.cookie";
import { Language } from "./i18n/i18n.config";

export default function Root() {
  // Cannot fetch it in routeData as it is not handled by root.tsx at the moment
  // See https://discordapp.com/channels/722131463138705510/910635844119982080/1036479279019606036
  const themeName = createServerData$(
    (key, { request }) => getColorScheme(request),
    {
      key: "themeName",
    },
  );

  // TODO: Detect browser language or use cookie
  const originalLocale = Language.French;

  const [, { locale: updateLocale }] = useI18n();
  const [locale] = createSignal(originalLocale);

  createEffect(() => {
    updateLocale(locale());
  });

  return (
    <html lang={locale()}>
      <Head>
        <Title>Easy Gundam</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body class={themeName()}>
        <ErrorBoundary>
          <Suspense>
            <Header />
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
