import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { listStyle } from "./List.css";

type ListProps = JSX.IntrinsicElements["ul"];

export default function List(props: ListProps) {
	const [local, others] = splitProps(props, ["class", "children"]);
	return (
		<ul class={clsx([listStyle, local.class])} {...others}>
			{local.children}
		</ul>
	);
}
