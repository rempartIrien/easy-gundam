import { DropdownMenu } from "@kobalte/core";
import clsx from "clsx";
import type { JSX } from "solid-js";

import { menuContentStyle } from "./MenuContent.css";

interface MenuContentProps {
	class?: string;
	children?: JSX.Element;
}

export default function MenuContent(props: MenuContentProps) {
	return (
		<DropdownMenu.Portal>
			<DropdownMenu.Content
				as="ol"
				class={clsx([menuContentStyle, props.class])}
			>
				{props.children}
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	);
}
