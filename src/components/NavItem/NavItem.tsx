import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { A } from "solid-start";

import { navItemActiveClass, navItemStyle } from "./NavItem.css";

type NavItemProps = ComponentProps<typeof A>;

export default function NavItem(props: NavItemProps) {
	const [local, others] = splitProps(props, [
		"children",
		"class",
		"activeClass",
	]);

	return (
		<A
			{...others}
			class={clsx(navItemStyle, local.class)}
			activeClass={clsx(navItemActiveClass, local.activeClass)}
		>
			{local.children}
		</A>
	);
}
