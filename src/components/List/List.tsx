import clsx from "clsx";
import type { ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export type ListProps<T extends ValidComponent = "ul"> = {
	component?: T;
} & ComponentProps<T> &
	JSX.HTMLAttributes<T>;

export default function List<T extends ValidComponent>(props: ListProps<T>) {
	const [local, others] = splitProps(props, ["class", "children", "component"]);
	return (
		<Dynamic
			component={local.component || "ul"}
			class={clsx(["text-block !pl-4r font-sans text-base", local.class])}
			{...others}
		>
			{local.children}
		</Dynamic>
	);
}
