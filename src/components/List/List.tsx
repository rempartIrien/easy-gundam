import clsx from "clsx";
import type { ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { listStyle } from "./List.css";

export type ListProps<T extends ValidComponent = "ul"> = {
	component?: T;
} & ComponentProps<T> &
	JSX.HTMLAttributes<T>;

export default function List<T extends ValidComponent>(props: ListProps<T>) {
	const [local, others] = splitProps(props, ["class", "children", "component"]);
	return (
		<Dynamic
			component={local.component || "ul"}
			class={clsx([listStyle, local.class])}
			{...others}
		>
			{local.children}
		</Dynamic>
	);
}
