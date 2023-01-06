import type { Accessor, JSX } from "solid-js";
import { createSignal } from "solid-js";
import { createContext } from "solid-js";

import type { Language } from "~/i18n/i18n.config";

const [locale, setLocale] = createSignal<Language | undefined>();

type LocaleContextType = [
  Accessor<Language | undefined>,
  (locale: Language) => void,
];

export const LocaleContext = createContext<LocaleContextType>([
  () => undefined,
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
