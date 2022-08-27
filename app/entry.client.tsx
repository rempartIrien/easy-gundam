import { RemixBrowser } from "@remix-run/react";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { getInitialNamespaces } from "remix-i18next";

import config, { namespaceLoadPath } from "./i18n/i18n.config";
import ClientStyleContext from "./styles/client.context";
import { getCssText } from "./styles/stitches.config";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({
  children,
}: ClientCacheProviderProps): JSX.Element {
  const [sheet, setSheet] = React.useState(getCssText());

  const reset = React.useCallback(() => {
    setSheet(getCssText());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset, sheet }}>
      {children}
    </ClientStyleContext.Provider>
  );
}

void i18next
  .use(initReactI18next) // Tell i18next to use the react-i18next plugin
  .use(LanguageDetector) // Setup a client-side language detector
  .use(Backend) // Setup your backend
  .init({
    ...config, // spread the configuration
    // This function detects the namespaces your routes rendered while SSR use
    ns: getInitialNamespaces(),
    backend: {
      loadPath: `/${namespaceLoadPath}`,
    },
    detection: {
      // Here only enable htmlTag detection, we'll detect the language only
      // server-side with remix-i18next, by using the `<html lang>` attribute
      // we can communicate to the client the language detected server-side
      order: ["htmlTag"],
      // Because we only use htmlTag, there's no reason to cache the language
      // on the browser, so we disable it
      caches: [],
    },
  })
  .then(() => {
    // After i18next has been initialized, we can hydrate the app
    // We need to wait to ensure translations are loaded before the hydration
    // Here wrap RemixBrowser in I18nextProvider from react-i18next
    return hydrateRoot(
      document,
      <React.StrictMode>
        <ClientCacheProvider>
          <I18nextProvider i18n={i18next}>
            <RemixBrowser />
          </I18nextProvider>
        </ClientCacheProvider>
      </React.StrictMode>,
    );
  });
