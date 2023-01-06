import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import { useContext } from "solid-js";

import { DictionaryContext } from "~/contexts/DictionaryContext";
import type { Language } from "~/i18n/i18n.config";

export default function ErrorPage(props: { initialLocale: Language }) {
  const dict = useContext(DictionaryContext);
  const i18n = createI18nContext(dict, props.initialLocale);
  const [t] = i18n;

  // TODO: HttpStatus according to kind of error (make two Error classes)
  return (
    <I18nContext.Provider value={i18n}>
      <main>
        <h1>{t("error.title")}</h1>
        <p>
          <a href="/">{t("error.links.backToHome")}</a>
        </p>
      </main>
    </I18nContext.Provider>
  );
}
