import LocaleSwitcher from "../LocaleSwitcher";
import Nav from "../Nav";
import NavItem from "../NavItem";
import ThemeSwitcher from "../ThemeSwitcher";

import { headerStyle, navItemStyle, navStyle } from "./Header.css";

export default function Header() {
  return (
    <header class={headerStyle}>
      <Nav class={navStyle}>
        <NavItem class={navItemStyle} href="/timelines">
          Timelines
        </NavItem>
        <NavItem class={navItemStyle} href="/about">
          About
        </NavItem>
      </Nav>
      <ThemeSwitcher />
      <LocaleSwitcher />
    </header>
  );
}
