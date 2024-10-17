import { DropdownMenu } from "@kobalte/core/dropdown-menu";

type MenuProps = Parameters<typeof DropdownMenu>[0];

// Exporting Kobalte component directly breaks Intellisense...
export default function Menu(props: MenuProps) {
	return <DropdownMenu {...props} />;
}
