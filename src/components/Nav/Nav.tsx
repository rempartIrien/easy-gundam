import clsx from "clsx";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";

import type NavItem from "../NavItem";

import { listItemStyle, listStyle, navStyle } from "./Nav.css";

interface NavProps extends JSX.HTMLAttributes<HTMLElement> {
	items: ReturnType<typeof NavItem>[];
	listClass?: string;
}

export default function Nav(props: NavProps) {
	const [local, others] = splitProps(props, ["items", "class", "listClass"]);

	return (
		<nav {...others} class={clsx(navStyle, local.class)}>
			<ol class={clsx([listStyle, local.listClass])}>
				<For each={local.items}>
					{(item) => <li class={listItemStyle}>{item}</li>}
				</For>
			</ol>
		</nav>
	);
}
