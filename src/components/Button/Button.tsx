import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { buttonStyle } from "./Button.css";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
	variant?: string;
};

export default function Button(props: ButtonProps) {
	const [local, otherProps] = splitProps(props, ["class", "variant"]);
	return <button class={clsx(buttonStyle, local.class)} {...otherProps} />;
}
