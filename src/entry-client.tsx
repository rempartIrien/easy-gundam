import { StartClient, mount } from "solid-start/entry-client";

import { Language } from "./i18n/i18n.config";
import type { I18Dictionary } from "./i18n/i18n.provider";
import { I18nProvider } from "./i18n/i18n.provider";

async function retrieveTranslsations(): Promise<I18Dictionary> {
  try {
    // Retrieve all locale files
    const locales = Object.values(Language);
    const content = await Promise.all(
      locales.map((locale) =>
        fetch(`/locales/${locale}.json`).then((response) => response.json()),
      ),
    );
    return locales.reduce((acc, cur, index) => {
      return { ...acc, [cur]: content[index] };
    }, {} as I18Dictionary);
  } catch (err) {
    // FIXME: logger
    const message = err instanceof Error ? `: ${err.message}` : "";
    throw new Error(`Can't retrieve translation files${message}`);
  }
}

const dict = await retrieveTranslsations();

mount(
  () => (
    <I18nProvider dict={dict}>
      <StartClient />
    </I18nProvider>
  ),
  document,
);
