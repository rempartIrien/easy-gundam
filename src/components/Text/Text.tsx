import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import useIsDarkMode from "~/hooks/useIsDarkMode";

export type TextProps = Omit<
	{
		variant?: "small" | "normal" | "big";
		color?: "primary-main" | "primary-text" | "text" | "inherit";
		children: JSX.Element;
		block?: boolean;
	},
	"class"
> &
	(
		| ({ block: true } & JSX.IntrinsicElements["p"])
		| ({ block?: false | undefined } & JSX.IntrinsicElements["span"])
	);

export default function Text(props: TextProps) {
	const [local, otherProps] = splitProps(props, [
		"block",
		"variant",
		"color",
		"children",
	]);
	const isDarkMode = useIsDarkMode();

	return (
		<Dynamic
			component={local.block ? "p" : "span"}
			class={clsx([
				"font-sans",
				local.block && "text-block",
				local.variant === "small" && "text-sm",
				(!local.variant || local.variant === "normal") && "text-base",
				local.variant === "big" && "text-lg",
				local.color === "primary-main" && "text-primary-main",
				local.color === "primary-text" && "text-primary-text",
				local.color === "text" && "text-text-main",
				(!local.color || local.color === "inherit") && "text-inherit",
				// See https://css-tricks.com/dark-mode-and-variable-fonts/
				isDarkMode() ? "font-light" : "font-normal",
			])}
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
