import { readFile } from "node:fs/promises";

import { Suspense } from "solid-js";
import {
  StartServer,
  createHandler,
  renderAsync,
} from "solid-start/entry-server";

import { Language } from "./i18n/i18n.config";
import type { I18Dictionary } from "./i18n/i18n.provider";
import { I18nProvider } from "./i18n/i18n.provider";

async function retrieveTranslsations(): Promise<I18Dictionary> {
  try {
    // Retrieve all locale files
    const locales = Object.values(Language);
    const contents = await Promise.all(
      locales.map((locale) => {
        const filePath = new URL(
          `../public/locales/${locale}.json`,
          import.meta.url,
        );
        return readFile(filePath, { encoding: "utf8" }).then(JSON.parse);
      }),
    );
    return locales.reduce((acc, cur, index) => {
      return { ...acc, [cur]: contents[index] };
    }, {} as I18Dictionary);
  } catch (err) {
    // FIXME: logger
    const message = err instanceof Error ? `: ${err.message}` : "";
    throw new Error(`Can't retrieve translation files${message}`);
  }
}

const dict = await retrieveTranslsations();

export default createHandler(
  renderAsync((event) => (
    <I18nProvider dict={dict}>
      <Suspense>
        <StartServer event={event} />
      </Suspense>
    </I18nProvider>
  )),
);
