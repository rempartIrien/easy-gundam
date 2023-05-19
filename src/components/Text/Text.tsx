import clsx from "clsx";
import type { ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import useIsDarkMode from "~/hooks/useIsDarkMode";

import { darkModeStyle, textStyle } from "./Text.css";

export type TextProps<T extends ValidComponent = "span"> = {
	variant?: "small" | "normal" | "big";
} & {
	component?: T;
} & ComponentProps<T> &
	JSX.HTMLAttributes<T>;

export default function Text<T extends ValidComponent = "span">(
	props: TextProps<T>,
) {
	const [local, otherProps] = splitProps(props, [
		"class",
		"component",
		"variant",
		"children",
	]);
	const isDarkMode = useIsDarkMode();

	return (
		<Dynamic
			component={local.component || "span"}
			class={clsx([
				textStyle[local.variant || "normal"],
				isDarkMode() && darkModeStyle,
				local.class,
			])}
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
