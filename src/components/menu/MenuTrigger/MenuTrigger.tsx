import { As, DropdownMenu } from "@kobalte/core";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import Button from "~/components/Button";

import { buttonStyle } from "./MenuTrigger.css";

type MenuTriggerProps = JSX.IntrinsicElements["button"];

export default function MenuTrigger(props: MenuTriggerProps) {
	const [local, others] = splitProps(props, ["class", "children"]);

	return (
		<DropdownMenu.Trigger asChild>
			<As
				component={Button}
				class={clsx([buttonStyle, local.class])}
				aria-label={props["aria-label"]}
				{...others}
			>
				{props.children}
			</As>
		</DropdownMenu.Trigger>
	);
}
