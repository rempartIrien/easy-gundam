import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import { useContext } from "solid-js";
import { Title, useParams } from "solid-start";
import { Outlet } from "solid-start";

import Header from "~/components/Header";
import { DictionaryContext } from "~/contexts/DictionaryContext";

export default function I18nLayout() {
  const params = useParams();
  const dict = useContext(DictionaryContext);
  const i18n = createI18nContext(dict, params.lang);

  return (
    <I18nContext.Provider value={i18n}>
      <Title>{i18n[0]("appName")}</Title>
      <Header />
      <Outlet />
    </I18nContext.Provider>
  );
}
