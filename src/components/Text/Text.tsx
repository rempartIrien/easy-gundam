import clsx from "clsx";
import type { Component, ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import useIsDarkMode from "~/hooks/useIsDarkMode";

import { darkModeStyle, textStyle } from "./Text.css";

export type TextProps<
	// Type from Solid ValidComponent
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	T extends keyof JSX.IntrinsicElements | Component<any> = "span",
> = {
	variant?: "small" | "normal" | "big";
} & {
	component?: T;
} & ComponentProps<T> &
	JSX.HTMLAttributes<T>;

export default function Text<
	// Type from Solid ValidComponent
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	T extends keyof JSX.IntrinsicElements | Component<any> = "span",
>(props: TextProps<T>) {
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
