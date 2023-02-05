import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { containerStyle } from "./CenterContent.css";

type CenterContentProps = JSX.IntrinsicElements["div"];

export default function CenterContent(props: CenterContentProps) {
	const [local, other] = splitProps(props, ["class", "children"]);
	return (
		<div class={clsx(containerStyle, local.class)} {...other}>
			{local.children}
		</div>
	);
}
