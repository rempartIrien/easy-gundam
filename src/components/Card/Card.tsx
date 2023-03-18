import clsx from "clsx";
import type { ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { cardStyle } from "./Card.css";

type CardProps<T extends ValidComponent = "div"> = {
	component?: T;
} & ComponentProps<T> &
	JSX.HTMLAttributes<HTMLElement>;

export default function Card<T extends ValidComponent = "div">(
	props: CardProps<T>,
) {
	const [local, otherProps] = splitProps(props, [
		"class",
		"component",
		"children",
	]);

	return (
		<Dynamic
			component={local.component || "div"}
			class={clsx([cardStyle, local.class])}
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
