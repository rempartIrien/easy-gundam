import { As, DropdownMenu } from "@kobalte/core";
import clsx from "clsx";
import type { JSX } from "solid-js";

import { MENU_REGION_CLASS } from "../MenuRegion";

import { menuContentStyle } from "./MenuContent.css";

interface MenuContentProps {
	class?: string;
	children?: JSX.Element;
}

export default function MenuContent(props: MenuContentProps) {
	return (
		<DropdownMenu.Portal
			mount={document.getElementsByClassName(MENU_REGION_CLASS)[0]}
		>
			<DropdownMenu.Content asChild>
				<As component="ol" class={clsx([menuContentStyle, props.class])}>
					{props.children}
				</As>
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	);
}
