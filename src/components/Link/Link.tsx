import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { A } from "solid-start";

import { linkStyle } from "./Link.css";

type LinkProps = ComponentProps<typeof A> & { underline?: boolean };

export default function Link(props: LinkProps) {
	const [local, others] = splitProps(props, ["children", "class"]);

	return (
		<A {...others} class={clsx(linkStyle, local.class)}>
			{local.children}
		</A>
	);
}
