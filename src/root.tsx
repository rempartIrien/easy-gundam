// @refresh reload
import { useI18n } from "@solid-primitives/i18n";
import { Routes } from "@solidjs/router";
import { Suspense, createEffect, createSignal } from "solid-js";
import { FileRoutes, Head, Meta, Scripts, Title } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";

import Header from "./components/Header";
import { Language } from "./i18n/i18n.config";

export default function Root() {
  const [, { locale: updateLocale }] = useI18n();
  // TODO: Detect browser language or use cookie
  const [locale, setLocale] = createSignal(Language.French);

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
      <body>
        <ErrorBoundary>
          <Suspense>
            <Header changeLocale={setLocale} />
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
