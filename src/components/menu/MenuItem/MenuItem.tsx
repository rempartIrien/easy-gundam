import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

interface MenuItemProps {
	isActive?: boolean;
	onSelect: (() => void) | (() => Promise<void>);
	children: JSX.Element;
}

export default function MenuItem(props: MenuItemProps) {
	const [local, others] = splitProps(props, [
		"children",
		"onSelect",
		"isActive",
	]);
	return (
		<DropdownMenu.Item
			onSelect={local.onSelect as (() => void) | undefined}
			as="button"
			class={clsx([
				"block w-full cursor-pointer border-none px-2f py-1r text-start",
				local.isActive ? "text-primary-text" : "text-text-main",
			])}
			{...others}
		>
			{local.children}
		</DropdownMenu.Item>
	);
}
