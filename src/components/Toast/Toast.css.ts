import { style, styleVariants } from "@vanilla-extract/css";

import { glassEffectStyles, vars } from "~/theme/theme.css";
import { fixedSpace, relativeSpace } from "~/theme/utils";

const baseToasterStyle = style({
	...glassEffectStyles,
	padding: `${relativeSpace(2)} ${fixedSpace(2)}`,
	borderRadius: vars.borderRadius.base,
	display: "flex",
	alignItems: "flex-start",
	maxWidth: `min(${relativeSpace(50)}, 100%)`,
	gap: fixedSpace(1),
	position: "relative",
});

export const toastStyle = styleVariants({
	error: [
		baseToasterStyle,
		{
			color: vars.color.text.main,
			backgroundColor: vars.color.toaster.error,
		},
	],
	info: [
		baseToasterStyle,
		{
			color: vars.color.text.main,
			backgroundColor: vars.color.toaster.info,
		},
	],
	success: [
		baseToasterStyle,
		{
			color: vars.color.text.main,
			backgroundColor: vars.color.toaster.success,
		},
	],
	warning: [
		baseToasterStyle,
		{
			color: vars.color.text.main,
			backgroundColor: vars.color.toaster.warning,
		},
	],
});

export const iconStyle = style({
	width: relativeSpace(3),
	height: relativeSpace(3),
	flexShrink: 0,
});

export const closeButtonStyle = style({
	position: "absolute",
	right: fixedSpace(0.5),
	top: fixedSpace(0.5),
	borderStyle: "none",
	display: "block",
	lineHeight: 1,
	cursor: "pointer",
});

export const titleStyle = style({
	paddingRight: fixedSpace(3),
	fontWeight: "bold",
});

export const contentStyle = style({
	display: "flex",
	flexDirection: "column",
	gap: relativeSpace(2),
});
