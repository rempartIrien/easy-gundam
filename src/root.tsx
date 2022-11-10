// @refresh reload
import { useI18n } from "@solid-primitives/i18n";
import { Routes } from "@solidjs/router";
import { Suspense, createEffect } from "solid-js";
import { FileRoutes, Head, Meta, Scripts, Title } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerData$ } from "solid-start/server";

import Header from "./components/Header";
import { getLocale } from "./cookies/i18n.cookie";
import { getColorScheme } from "./cookies/theme.cookie";

export default function Root() {
  // Cannot fetch it in routeData as it is not handled by root.tsx at the moment
  // See https://discordapp.com/channels/722131463138705510/910635844119982080/1036479279019606036
  const themeName = createServerData$(
    (_, { request }) => getColorScheme(request),
    {
      key: "themeName",
    },
  );

  const locale = createServerData$((_, { request }) => getLocale(request), {
    key: "locale",
  });

  const [, { locale: updateLocale }] = useI18n();

  createEffect(() => {
    if (locale()) {
      updateLocale(locale());
    }
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
