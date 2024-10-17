import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import Button from "~/components/Button";

import { activeButtonStyle, buttonStyle } from "./MenuItem.css";

interface MenuItemProps {
	isActive?: boolean;
	onSelect: (() => void) | (() => Promise<void>);
	children: JSX.Element;
	class?: string;
}

export default function MenuItem(props: MenuItemProps) {
	const [local, others] = splitProps(props, [
		"class",
		"children",
		"onSelect",
		"isActive",
	]);
	return (
		<DropdownMenu.Item
			onSelect={local.onSelect as (() => void) | undefined}
			as={Button}
			class={clsx([buttonStyle, local.isActive && activeButtonStyle])}
			{...others}
		>
			{local.children}
		</DropdownMenu.Item>
	);
}
