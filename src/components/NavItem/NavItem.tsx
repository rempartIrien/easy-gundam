import type { A } from "@solidjs/router";
import { useLocation, useResolvedPath } from "@solidjs/router";
import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { createMemo } from "solid-js";
import { splitProps } from "solid-js";

import Link from "../Link";

import { navItemActiveClass, navItemStyle } from "./NavItem.css";

type NavItemProps = ComponentProps<typeof A>;

export default function NavItem(props: NavItemProps) {
	const [local, others] = splitProps(props, [
		"children",
		"class",
		"activeClass",
	]);

	// More or less the same logic as in `A.isActive` from `solid-router` but
	// with trailing slash handling.
	// See https://github.com/solidjs/solid-router/blob/main/src/components.tsx
	const to = useResolvedPath(() => props.href);
	const location = useLocation();

	const isActive = createMemo(() => {
		const to_ = to();
		if (to_ === undefined) {
			return false;
		}
		const path = to_.split(/[?#]/, 1)[0].toLowerCase();
		const loc = location.pathname.toLowerCase();
		const locNoTrailingSlash = loc.endsWith("/") ? loc.slice(0, -1) : loc;
		const pathNoTrailingSlash = path.endsWith("/") ? path.slice(0, -1) : path;
		return props.end
			? locNoTrailingSlash === pathNoTrailingSlash
			: loc.startsWith(path);
	});

	return (
		<Link
			noStyle
			class={clsx(
				navItemStyle,
				isActive() && navItemActiveClass,
				isActive() && local.activeClass,
				local.class,
			)}
			{...others}
		>
			{local.children}
		</Link>
	);
}
