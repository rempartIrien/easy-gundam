import type { A } from "@solidjs/router";
import { useLocation, useResolvedPath } from "@solidjs/router";
import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { createMemo } from "solid-js";

import Link from "../Link";

type NavItemProps = Omit<ComponentProps<typeof A>, "class">;

export default function NavItem(props: NavItemProps) {
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
		<div
			class={clsx(
				"ease inline-block border-0 border-b-[4px] border-solid text-text-main no-underline transition-[border-color] duration-200 hover:text-primary-main motion-reduce:transition-none motion-reduce:hover:transform-none",
				isActive() ? "border-b-primary-main" : "border-b-transparent",
			)}
		>
			<Link noStyle {...props} />
		</div>
	);
}
