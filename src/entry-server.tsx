import { readFile } from "node:fs/promises";

import {
  StartServer,
  createHandler,
  renderAsync,
} from "solid-start/entry-server";

import { DictionaryProvider } from "./contexts/DictionaryContext";
import type { Language } from "./i18n/i18n.config";
import type { I18nDictionary } from "./i18n/i18n.utils";
import { retrieveTranslsations } from "./i18n/i18n.utils";

const dict = await retrieveTranslsations((locale) => {
  const filePath = new URL(`../public/locales/${locale}.json`, import.meta.url);
  return readFile(filePath, { encoding: "utf8" }).then(
    (content) => JSON.parse(content) as I18nDictionary[Language],
  );
});

export default createHandler(
  renderAsync((event) => (
    <DictionaryProvider initialDict={dict}>
      <StartServer event={event} />
    </DictionaryProvider>
  )),
);
