import { useI18n } from "@solid-primitives/i18n";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import CenterContent from "../CenterContent";
import LocaleSwitcher from "../LocaleSwitcher";
import Nav from "../Nav";
import NavItem from "../NavItem";
import ThemeSwitcher from "../ThemeSwitcher";

import { containerStyle, headerStyle, navStyle } from "./Header.css";

type HeaderProps = JSX.IntrinsicElements["header"];

export default function Header(props: HeaderProps) {
	const [t] = useI18n();
	const [local, others] = splitProps(props, ["class"]);

	return (
		<header class={clsx([headerStyle, local.class])} {...others}>
			<CenterContent class={containerStyle}>
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
			</CenterContent>
		</header>
	);
}
