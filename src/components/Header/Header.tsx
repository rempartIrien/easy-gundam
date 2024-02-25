import { createPreventScroll } from "@kobalte/core";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { createSignal } from "solid-js";
import { Show, splitProps } from "solid-js";

import useTranslation from "~/hooks/useTranslation";

import CenterContent from "../CenterContent";
import Link from "../Link";
import Logo from "../Logo";
import Nav from "../Nav";
import NavItem from "../NavItem";

import {
	actionContainerStyle,
	collapsedHeaderStyle,
	desktopNavStyle,
	expandedHeaderContainerStyle,
	expandedHeaderMainRowStyle,
	headerStyle,
	logoContainerStyle,
	mainRowContainerStyle,
	menuIconStyle,
	mobileNavStyle,
} from "./Header.css";
import HeaderIcon from "./HeaderIcon";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

type HeaderProps = JSX.IntrinsicElements["header"];

export default function Header(props: HeaderProps) {
	const [t] = useTranslation();
	const [local, others] = splitProps(props, ["class"]);
	const [open, setOpen] = createSignal(false);
	let ref: HTMLDivElement | undefined;

	const links = [
		{ href: "home", labelKey: "navigation.home" },
		{ href: "timelines", labelKey: "navigation.timelines" },
		{ href: "about", labelKey: "navigation.about" },
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
			<Link class={logoContainerStyle} href="/">
				<Logo />
			</Link>
			<Nav
				class={desktopNavStyle}
				items={links.map((link) => (
					<NavItem href={link.href}>{t(link.labelKey)}</NavItem>
				))}
			/>
			<button class={menuIconStyle} onClick={toggleMenu}>
				<Show when={open()} fallback={<HeaderIcon name="menu" />}>
					<HeaderIcon name="close" />
				</Show>
			</button>
			<div class={actionContainerStyle}>
				<ThemeSwitcher />
				<LocaleSwitcher />
			</div>
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
									{t(props.labelKey)}
								</NavItem>
							))}
						/>
					</CenterContent>
				</div>
			</Show>
		</header>
	);
}
