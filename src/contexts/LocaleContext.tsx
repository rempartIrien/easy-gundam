import type { Accessor, JSX } from "solid-js";
import { createSignal } from "solid-js";
import { createContext } from "solid-js";

import type { Language } from "~/i18n/i18n.config";
import { DEFAULT_LOCALE } from "~/i18n/i18n.cookie";

const [locale, setLocale] = createSignal(DEFAULT_LOCALE);

type LocaleContextType = [Accessor<Language>, (locale: Language) => void];

export const LocaleContext = createContext<LocaleContextType>([
  () => DEFAULT_LOCALE,
  setLocale,
]);

interface LocaleProviderProps {
  children: JSX.Element;
}

export function LocaleProvider(props: LocaleProviderProps) {
  return (
    <LocaleContext.Provider value={[locale, setLocale]}>
      {props.children}
    </LocaleContext.Provider>
  );
}
