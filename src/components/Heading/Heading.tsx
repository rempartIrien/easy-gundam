import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";

import useIsDarkMode from "~/hooks/useIsDarkMode";

import { darkModeStyle, headingStyle } from "./Heading.css";

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
	const isDarkMode = useIsDarkMode();

	return (
		<Dynamic
			component={component()}
			class={clsx([
				headingStyle[local.variant],
				isDarkMode() && darkModeStyle,
				local.class,
			])}
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
