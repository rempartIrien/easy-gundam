import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { createMemo } from "solid-js";
import { splitProps } from "solid-js";
import { A } from "solid-start";

import { linkStyle } from "./Link.css";

interface LinkProps extends ComponentProps<typeof A> {
	noStyle?: boolean;
}

export default function Link(props: LinkProps) {
	const [local, others] = splitProps(props, ["children", "noStyle", "class"]);
	const variant = createMemo(() => (local.noStyle ? "unstyled" : "styled"));

	return (
		<A {...others} class={clsx(linkStyle[variant()], local.class)}>
			{local.children}
		</A>
	);
}
