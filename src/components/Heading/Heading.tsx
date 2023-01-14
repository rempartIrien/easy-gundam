import type { JSX } from "solid-js";

import { headingStyle } from "./Heading.css";

export default function Title(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
	return <h1 class={headingStyle}>{props.children}</h1>;
}
