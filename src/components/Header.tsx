import { For } from "solid-js";
import { A } from "solid-start";

import { Language, LanguageNmes } from "~/i18n/i18n.config";

interface HeaderProps {
  changeLocale: (value: Language) => void;
}

export default function Header(props: HeaderProps) {
  return (
    <nav>
      <A href="/timelines">Timelines</A>
      <A href="/about">About</A>
      <For each={Object.values(Language)}>
        {(locale) => (
          <button onClick={() => props.changeLocale(locale)}>
            {LanguageNmes[locale]}
          </button>
        )}
      </For>
    </nav>
  );
}
