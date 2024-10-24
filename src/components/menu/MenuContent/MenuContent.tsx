import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import type { JSX } from "solid-js";

import { MENU_REGION_CLASS } from "../MenuRegion";

interface MenuContentProps {
	children?: JSX.Element;
}

export default function MenuContent(props: MenuContentProps) {
	return (
		<DropdownMenu.Portal
			mount={document.getElementsByClassName(MENU_REGION_CLASS)[0]}
		>
			<DropdownMenu.Content
				as="ol"
				class="glass-effect m-0 list-none rounded px-0 py-1f"
			>
				{props.children}
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	);
}
