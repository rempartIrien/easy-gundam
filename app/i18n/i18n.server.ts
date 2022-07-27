import { resolve } from "node:path";

import Backend from "i18next-fs-backend";
import { RemixI18Next } from "remix-i18next";

import {
  fallbackLanguage,
  namespaceLoadPath,
  supportedLanguages,
} from "./i18n.config";

export const i18n = new RemixI18Next({
  detection: {
    // This is the list of languages your application supports
    supportedLanguages,
    // This is the language you want to use in case the user language is not
    // listed above
    fallbackLanguage,
  },
  // This is the configuration for i18next used when translating messages server
  // side only
  i18next: {
    backend: { loadPath: resolve(`./public/${namespaceLoadPath}`) },
  },
  // The backend you want to use to load the translations
  // Tip: You could pass `resources` to the `i18next` configuration and avoid
  // a backend here
  backend: Backend,
});
