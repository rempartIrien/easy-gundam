import LocaleSwitcher from "../LocaleSwitcher";
import Nav from "../Nav";
import NavItem from "../NavItem";
import ThemeSwitcher from "../ThemeSwitcher";

import { headerStyle, navStyle } from "./Header.css";

export default function Header() {
  return (
    <header class={headerStyle}>
      <Nav
        class={navStyle}
        items={[
          <NavItem href="/timelines">Timelines</NavItem>,
          <NavItem href="/about">About</NavItem>,
        ]}
      />
      <ThemeSwitcher />
      <LocaleSwitcher />
    </header>
  );
}
