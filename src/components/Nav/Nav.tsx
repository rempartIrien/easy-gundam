import clsx from "clsx";
import type { JSX } from "solid-js";
import { For, createMemo, splitProps } from "solid-js";

import type NavItem from "../NavItem";

type NavProps = Omit<JSX.HTMLAttributes<HTMLElement>, "class" | "children"> & {
	items: ReturnType<typeof NavItem>[];
	vertical?: boolean;
};

export default function Nav(props: NavProps) {
	const [local, others] = splitProps(props, ["items", "vertical"]);
	const items = createMemo(() => local.items.filter((v) => !!v));

	return (
		<nav {...others}>
			<ol
				class={clsx([
					"m-0 flex list-none gap-2f",
					local.vertical ? "flex-col px-1r py-1f" : "p-0",
				])}
			>
				<For each={items()}>{(item) => <li>{item}</li>}</For>
			</ol>
		</nav>
	);
}
