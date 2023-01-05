import type { JSX } from "solid-js";
import { createContext } from "solid-js";

import type { I18nDictionary } from "~/i18n/i18n.utils";

// This context aims to hold the translation dictionary.
// It is separated from the I18nContext because can't be filled
// at the same time.
// Indeed, we need to have the dictionary ready when creating the
// I18nContext not to return a page without translations and
// this can happen if the dictionary is loaded in the same execution
// call.
export const DictionaryContext = createContext<I18nDictionary>();

interface DictionaryContextProps {
  initialDict: I18nDictionary;
  children: JSX.Element;
}

export function DictionaryProvider(props: DictionaryContextProps) {
  return (
    <DictionaryContext.Provider value={props.initialDict}>
      {props.children}
    </DictionaryContext.Provider>
  );
}
