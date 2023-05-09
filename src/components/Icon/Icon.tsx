import clsx from "clsx";

import ICON_REGISTRY from "./icon-registry";
import { iconStyle } from "./Icon.css";

export interface IconProps {
	name: keyof typeof ICON_REGISTRY;
	class?: string;
}

export default function Icon(props: IconProps) {
	return (
		<svg class={clsx([iconStyle, props.class])}>
			<use href={`${ICON_REGISTRY[props.name]}#icon`} />
		</svg>
	);
}
