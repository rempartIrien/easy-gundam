import { DropdownMenu } from "@kobalte/core";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { buttonStyle } from "./MenuTrigger.css";

type MenuTriggerProps = JSX.IntrinsicElements["button"];

export default function MenuTrigger(props: MenuTriggerProps) {
	const [local, others] = splitProps(props, ["class", "children"]);

	// FIXME: Due to a bug in Kobalte,we cannot use out `Button` component with
	// `As`.
	return (
		<DropdownMenu.Trigger class={clsx([buttonStyle, local.class])} {...others}>
			{props.children}
		</DropdownMenu.Trigger>
	);
}
