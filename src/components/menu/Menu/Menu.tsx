import { DropdownMenu } from "@kobalte/core";

type MenuProps = Parameters<typeof DropdownMenu.Root>[0];

// Exporting Kobalte component directly breaks Intellisense...
export default function Menu(props: MenuProps) {
	return <DropdownMenu.Root {...props} />;
}
