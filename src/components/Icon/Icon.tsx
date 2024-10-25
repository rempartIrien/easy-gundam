import { Dynamic } from "solid-js/web";

import ICON_REGISTRY from "./icon-registry";

export interface IconProps {
	name: keyof typeof ICON_REGISTRY;
	size?: string;
}

export default function Icon(props: IconProps) {
	return (
		<Dynamic
			component={ICON_REGISTRY[props.name]}
			class={`h-[1em] w-[1em]`}
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	);
}
