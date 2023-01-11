import type { JSX } from "solid-js";

import { subtitleStyle } from "./Subtitle.css";

export default function Subtitle(
	props: JSX.HTMLAttributes<HTMLHeadingElement>,
) {
	return <h2 class={subtitleStyle}>{props.children}</h2>;
}
