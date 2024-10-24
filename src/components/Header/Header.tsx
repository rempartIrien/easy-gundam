import { clsx } from "clsx";
import type { JSX } from "solid-js";
import { createSignal } from "solid-js";
import { Show } from "solid-js";
import createPreventScroll from "solid-prevent-scroll";

import useTranslation from "~/hooks/useTranslation";

import CenterContent from "../CenterContent";
import IconButton from "../IconButton";
import Link from "../Link";
import Logo from "../Logo";
import Nav from "../Nav";
import NavItem from "../NavItem";

import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

type HeaderProps = Omit<JSX.IntrinsicElements["header"], "class">;

export default function Header(props: HeaderProps) {
	const t = useTranslation();
	const [open, setOpen] = createSignal(false);
	let ref: HTMLDivElement | undefined;

	const links = [
		{ href: "home", labelKey: "navigation.home" },
		{ href: "timelines", labelKey: "navigation.timelines" },
		{ href: "about", labelKey: "navigation.about" },
	];

	createPreventScroll({
		element: ref,
		enabled: open,
	});

	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};

	const MainRow = () => (
		<CenterContent>
			<div class="relative flex items-center gap-2f py-2f sm:static sm:gap-4f">
				<div class="absolute left-1/2 top-1/2 w-[40px] -translate-x-1/2 -translate-y-1/2 sm:static sm:translate-x-0 sm:translate-y-0">
					<Link href="/">
						<Logo />
					</Link>
				</div>
				<div class="hidden flex-1 sm:flex">
					<Nav
						items={links.map((link) => (
							<NavItem href={link.href}>{t(link.labelKey)}</NavItem>
						))}
					/>
				</div>
				<div class="mr-auto border-none sm:hidden">
					<IconButton
						iconName={open() ? "close" : "menu"}
						onClick={toggleMenu}
					/>
				</div>
				<div class="flex gap-2f">
					<ThemeSwitcher />
					<LocaleSwitcher />
				</div>
			</div>
		</CenterContent>
	);

	return (
		<header class={"sticky top-0 z-10 !border-x-0 !border-t-0"} {...props}>
			<div class={clsx(["glass-effect", open() && "invisible"])}>
				<MainRow />
			</div>
			<Show when={open()}>
				<div
					ref={ref}
					class="glass-effect sm:none fixed bottom-0 left-0 right-0 top-0 block !border-x-0 !border-t-0"
				>
					<MainRow />
					<CenterContent>
						<Nav
							vertical
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
