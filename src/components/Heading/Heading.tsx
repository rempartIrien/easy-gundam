import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";

import { headingStyle } from "./Heading.css";

interface HeadingProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
	variant: "title" | "subtitle";
}

export default function Heading(props: HeadingProps) {
	const [local, otherProps] = splitProps(props, [
		"class",
		"variant",
		"children",
	]);
	const component = createMemo(() => (local.variant === "title" ? "h1" : "h2"));
	return (
		<Dynamic
			component={component()}
			class={clsx([headingStyle[local.variant], local.class])}
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
