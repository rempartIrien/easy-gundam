import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import type { JSX } from "solid-js";

import { Language } from "./i18n.config";

interface RecursiveString {
  [key: string]: string | RecursiveString;
}

export type I18Dictionary = Record<Language, RecursiveString>;

interface I18nProviderProps {
  dict: I18Dictionary;
  children: JSX.Element;
}

export function I18nProvider(props: I18nProviderProps) {
  //FIXME: Handle this warning properly
  // eslint-disable-next-line solid/reactivity
  const value = createI18nContext(props.dict, Language.French);
  return (
    <I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>
  );
}
