import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { sectionStyle } from "./Section.css";

type SectionProps = JSX.IntrinsicElements["section"];

export default function Section(props: SectionProps) {
	const [local, others] = splitProps(props, ["class", "children"]);
	return (
		<section class={clsx([sectionStyle, local.class])} {...others}>
			{local.children}
		</section>
	);
}
