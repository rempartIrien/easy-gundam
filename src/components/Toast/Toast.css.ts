import { style, styleVariants } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/styles";
import { fixedSpace, relativeSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

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

export const closeIconStyle = style({
	width: "1.25rem",
	height: "1.25rem",
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
