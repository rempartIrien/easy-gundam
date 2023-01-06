import { StartClient, mount } from "solid-start/entry-client";

import { DictionaryProvider } from "./contexts/DictionaryContext";
import type { Language } from "./i18n/i18n.config";
import type { I18nDictionary } from "./i18n/i18n.utils";
import { retrieveTranslsations } from "./i18n/i18n.utils";

const dict = await retrieveTranslsations((locale) =>
  fetch(`/locales/${locale}.json`).then(
    (response) => response.json() as Promise<I18nDictionary[Language]>,
  ),
);

mount(
  () => (
    <DictionaryProvider initialDict={dict}>
      <StartClient />
    </DictionaryProvider>
  ),
  document,
);
