import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { buttonStyle } from "./MenuTrigger.css";

interface MenuTriggerProps {
	children: JSX.Element;
	class?: string;
}

export default function MenuTrigger(props: MenuTriggerProps) {
	const [local, others] = splitProps(props, ["class", "children"]);

	// FIXME: Due to a bug in Kobalte,we cannot use out `Button` component with
	// `As`.
	return (
		<DropdownMenu.Trigger class={clsx([buttonStyle, local.class])} {...others}>
			{local.children}
		</DropdownMenu.Trigger>
	);
}
