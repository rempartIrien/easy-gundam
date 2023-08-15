import clsx from "clsx";
import { type JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";

import useIsDarkMode from "~/hooks/useIsDarkMode";

type LogoProps = Omit<JSX.IntrinsicElements["img"], "src" | "alt"> & {
	variant?: "text" | "small";
};

export default function Logo(props: LogoProps) {
	const isDarkMode = useIsDarkMode();
	const [local, others] = splitProps(props, ["class", "variant"]);

	const url = createMemo(() => {
		const variantPart = local.variant === "text" ? "Text" : "";
		const themePart = isDarkMode() ? "Dark" : "Light";
		return `/logos/Logo${variantPart}${themePart}.svg`;
	});

	// FIXME: hardcoded string
	return <img class={clsx([local.class])} src={url()} alt="logo" {...others} />;
}
