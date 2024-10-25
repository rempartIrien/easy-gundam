import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import type { ComponentProps } from "solid-js";

import IconButton from "~/components/IconButton";

type MenuTriggerProps = ComponentProps<typeof IconButton>;

export default function MenuTrigger(props: MenuTriggerProps) {
	return <DropdownMenu.Trigger as={IconButton} {...props} />;
}
