import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { Show, createMemo } from "solid-js";
import { splitProps } from "solid-js";
import { A } from "solid-start";

import Icon from "../Icon";

import { linkStyle } from "./Link.css";

interface LinkProps extends Omit<ComponentProps<typeof A>, "target" | "rel"> {
	noStyle?: boolean;
}

export default function Link(props: LinkProps) {
	const [local, others] = splitProps(props, ["children", "noStyle", "class"]);
	const variant = createMemo(() => (local.noStyle ? "unstyled" : "styled"));
	const isExternal = createMemo(() => props.href.startsWith("http"));
	const target = createMemo(() => (isExternal() ? "_blank" : undefined));
	const rel = createMemo(() =>
		isExternal() ? "noreferrer noopener" : undefined,
	);

	return (
		<A
			class={clsx(linkStyle[variant()], local.class)}
			target={target()}
			rel={rel()}
			{...others}
		>
			{local.children}
			<Show when={isExternal()}>
				<Icon name="externalLink" />
			</Show>
		</A>
	);
}
