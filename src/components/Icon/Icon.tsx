import clsx from "clsx";
import { Dynamic } from "solid-js/web";

import ICON_REGISTRY from "./icon-registry";
import { iconStyle } from "./Icon.css";

export interface IconProps {
	name: keyof typeof ICON_REGISTRY;
	class?: string;
}

export default function Icon(props: IconProps) {
	return (
		<Dynamic
			component={ICON_REGISTRY[props.name]}
			class={clsx([iconStyle, props.class])}
		/>
	);
}
