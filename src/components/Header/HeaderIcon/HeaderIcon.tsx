import clsx from "clsx";

import Icon from "~/components/Icon";
import type { IconProps } from "~/components/Icon/Icon";

import { headerIconStyle } from "./HeaderIcon.css";

type HeaderIconProps = IconProps;

export default function HeaderIcon(props: HeaderIconProps) {
	return (
		<Icon name={props.name} class={clsx([headerIconStyle, props.class])} />
	);
}
