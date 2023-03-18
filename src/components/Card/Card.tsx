import clsx from "clsx";
import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { cardStyle } from "./Card.css";

type CardProps<P> = {
	component?: Component<P> | string | keyof JSX.IntrinsicElements;
	children: JSX.Element;
	class?: string;
} & P;

export default function Card<T>(props: CardProps<T>) {
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
