import { Button } from "@kobalte/core/button";
import { splitProps } from "solid-js";
import type { ComponentProps } from "solid-js";
import type { JSX } from "solid-js";

import Icon from "../Icon";

type IconButtonProps = Omit<
	JSX.IntrinsicElements["button"],
	"class" | "children"
> & {
	iconName: ComponentProps<typeof Icon>["name"];
};

export default function IconButton(props: IconButtonProps) {
	const [local, others] = splitProps(props, ["iconName"]);
	return (
		<Button
			class="glass-effect flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full !border-none !bg-background-button text-primary-main !shadow-none"
			{...others}
		>
			<Icon name={local.iconName} />
		</Button>
	);
}
