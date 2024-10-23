import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";

import useIsDarkMode from "~/hooks/useIsDarkMode";

type HeadingProps = Omit<JSX.HTMLAttributes<HTMLHeadingElement>, "class"> & {
	variant: "title" | "subtitle";
};

export default function Heading(props: HeadingProps) {
	const [local, otherProps] = splitProps(props, ["variant", "children"]);
	const tag = createMemo(() =>
		local.variant === "title"
			? { component: "h1", style: "text-2xl w-100% mb-sectionBottom" }
			: { component: "h2", style: "text-xl  mb-midSectionBottom" },
	);
	const isDarkMode = useIsDarkMode();

	return (
		<Dynamic
			component={tag().component}
			class={clsx([
				"m-0 w-min-100-88r p-0 text-primary-main",
				tag().style,
				isDarkMode() ? "font-semibold" : "font-bold",
			])}
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
