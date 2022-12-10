import { A } from "solid-start";

import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <>
      <nav>
        <A href="/timelines">Timelines</A>
        <A href="/about">About</A>
      </nav>
      <ThemeSwitcher />
      <LocaleSwitcher />
    </>
  );
}
