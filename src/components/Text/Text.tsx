import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { textStyle } from "./Text.css";

type TextProps = JSX.IntrinsicElements["p"] & {
	variant: "small" | "normal" | "big";
};

export default function Text(props: TextProps) {
	const [local, otherProps] = splitProps(props, [
		"class",
		"variant",
		"children",
	]);
	return (
		<Dynamic
			component={"p"}
			class={clsx([textStyle[local.variant], local.class])}
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
