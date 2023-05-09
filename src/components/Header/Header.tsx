import { createPreventScroll } from "@kobalte/core";
import { useI18n } from "@solid-primitives/i18n";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { createSignal } from "solid-js";
import { Show, splitProps } from "solid-js";

import CenterContent from "../CenterContent";
import Nav from "../Nav";
import NavItem from "../NavItem";

import {
	collapsedHeaderStyle,
	desktopNavStyle,
	expandedHeaderContainerStyle,
	expandedHeaderMainRowStyle,
	headerStyle,
	mainRowContainerStyle,
	menuIconStyle,
	mobileNavStyle,
} from "./Header.css";
import HeaderIcon from "./HeaderIcon";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

type HeaderProps = JSX.IntrinsicElements["header"];

export default function Header(props: HeaderProps) {
	const [t] = useI18n();
	const [local, others] = splitProps(props, ["class"]);
	const [open, setOpen] = createSignal(false);
	let ref: HTMLDivElement | undefined;

	const links = [
		{ href: "home", label: t("header.nav.home") },
		{ href: "timelines", label: t("header.nav.timelines") },
		{ href: "about", label: t("header.nav.about") },
	];

	const toggleMenu = () => {
		setOpen((prev) => !prev);

		createPreventScroll({
			ownerRef: () => ref,
			isDisabled: () => !open(),
		});
	};

	const MainRow = (props: { class?: string }) => (
		<CenterContent class={clsx([mainRowContainerStyle, props.class])}>
			<Nav
				class={desktopNavStyle}
				items={links.map((link) => (
					<NavItem href={link.href}>{link.label}</NavItem>
				))}
			/>
			<button class={menuIconStyle} onClick={toggleMenu}>
				<Show when={open()} fallback={<HeaderIcon name="menu" />}>
					<HeaderIcon name="close" />
				</Show>
			</button>
			<ThemeSwitcher />
			<LocaleSwitcher />
		</CenterContent>
	);

	return (
		<header
			class={clsx([headerStyle, !open() && collapsedHeaderStyle, local.class])}
			{...others}
		>
			<MainRow class={clsx([open() && expandedHeaderMainRowStyle])} />
			<Show when={open()}>
				<div ref={ref} class={expandedHeaderContainerStyle}>
					<MainRow />
					<CenterContent>
						<Nav
							listClass={mobileNavStyle}
							items={links.map((props) => (
								<NavItem href={props.href} onClick={toggleMenu}>
									{props.label}
								</NavItem>
							))}
						/>
					</CenterContent>
				</div>
			</Show>
		</header>
	);
}
