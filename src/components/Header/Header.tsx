import { useI18n } from "@solid-primitives/i18n";

import LocaleSwitcher from "../LocaleSwitcher";
import Nav from "../Nav";
import NavItem from "../NavItem";
import ThemeSwitcher from "../ThemeSwitcher";

import { headerStyle, navStyle } from "./Header.css";

export default function Header() {
	const [t] = useI18n();
	return (
		<header class={headerStyle}>
			<Nav
				class={navStyle}
				items={[
					<NavItem href="home">{t("header.nav.home")}</NavItem>,
					<NavItem href="timelines">{t("header.nav.timelines")}</NavItem>,
					<NavItem href="about">{t("header.nav.about")}</NavItem>,
				]}
			/>
			<ThemeSwitcher />
			<LocaleSwitcher />
		</header>
	);
}
