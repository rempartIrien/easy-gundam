import { DropdownMenu } from "@kobalte/core";
import clsx from "clsx";
import { splitProps } from "solid-js";

import Button from "~/components/Button";
import type { ButtonProps } from "~/components/Button/Button";

import { activeButtonStyle, buttonStyle } from "./MenuItem.css";

interface MenuItemProps extends ButtonProps {
	isActive?: boolean;
	onSelect: () => void | (() => Promise<void>);
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
			as={Button}
			class={clsx([buttonStyle, local.isActive && activeButtonStyle])}
			onSelect={local.onSelect}
			{...others}
		>
			{local.children}
		</DropdownMenu.Item>
	);
}
