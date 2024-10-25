import { type JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";

import useIsDarkMode from "~/hooks/useIsDarkMode";

type LogoProps = Omit<JSX.IntrinsicElements["img"], "src" | "alt" | "class"> & {
	variant?: "text" | "small";
};

export default function Logo(props: LogoProps) {
	const isDarkMode = useIsDarkMode();
	const [local, others] = splitProps(props, ["variant"]);

	const url = createMemo(() => {
		const variantPart = local.variant === "text" ? "Text" : "";
		const themePart = isDarkMode() ? "dark" : "light";
		return `/logos/${themePart}/Logo${variantPart}.svg`;
	});

	// FIXME: hardcoded string
	return <img src={url()} alt="logo" {...others} />;
}
