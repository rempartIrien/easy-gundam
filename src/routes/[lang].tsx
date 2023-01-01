import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import { createEffect, untrack, useContext } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useParams } from "solid-start";
import { useRouteData } from "solid-start";
import { Outlet } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";

import Header from "~/components/Header";
import { LocaleContext } from "~/contexts/LocaleContext";
import type { Language } from "~/i18n/i18n.config";
import { DEFAULT_LOCALE } from "~/i18n/i18n.cookie";
import type { I18nDictionary } from "~/i18n/i18n.server";
import { retrieveTranslsations } from "~/i18n/i18n.server";

export function routeData(params: RouteDataArgs) {
  return createServerData$(
    async ([lang, pathname]) => {
      const dict = await retrieveTranslsations();
      if (typeof dict[lang as Language] !== "object") {
        throw redirect(pathname.replace(`${lang}`, DEFAULT_LOCALE));
      }
      return { [lang]: dict[lang as Language] };
    },
    {
      key: () => [params.params.lang, untrack(() => params.location.pathname)],
    },
  );
}

export default function I18nLayout() {
  const params = useParams();
  const dict = useRouteData<typeof routeData>();
  const i18n = createI18nContext(dict(), params.lang);
  const [, setLocale] = useContext(LocaleContext);

  createEffect(() => {
    if (!dict.loading && dict()?.[params.lang]) {
      i18n[1].add(params.lang, dict()?.[params.lang] as I18nDictionary);
      i18n[1].locale(params.lang);
      setLocale(params.lang as Language);
    }
  });

  return (
    <I18nContext.Provider value={i18n}>
      <Header />
      <Outlet />
    </I18nContext.Provider>
  );
}
