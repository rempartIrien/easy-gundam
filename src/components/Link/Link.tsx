import { A } from "@solidjs/router";
import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { createMemo } from "solid-js";
import { splitProps } from "solid-js";

type LinkProps = Omit<ComponentProps<typeof A>, "target" | "rel" | "class"> & {
	noStyle?: boolean;
	block?: boolean;
};

export default function Link(props: LinkProps) {
	const [local, others] = splitProps(props, ["children", "noStyle", "block"]);
	const isExternal = createMemo(() => props.href.startsWith("http"));
	const target = createMemo(() => (isExternal() ? "_blank" : undefined));
	const rel = createMemo(() =>
		isExternal() ? "noreferrer noopener" : undefined,
	);

	return (
		<A
			class={clsx(
				"no-underline",
				local.block ? "block" : "inline", // FIXME: not ideal
				local.noStyle
					? "text-inherit"
					: "text-primary-text hover:text-primary-main",
				// Use inline to stick to the end of the link content.
				// Add enough characters since we stay in `display: inline`. Use non breakable characters.
				// For safari create a mask that fit all the element (in height and width)
				isExternal() &&
					"after:link-mask after:inline after:bg-primary-text after:align-baseline after:content-['\\\\_\\\\_\\\\_'] hover:after:bg-primary-main",
			)}
			target={target()}
			rel={rel()}
			{...others}
		>
			{local.children}
		</A>
	);
}
