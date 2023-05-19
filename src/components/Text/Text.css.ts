import { style, styleVariants } from "@vanilla-extract/css";

import vars from "~/theme/variables.css";

const baseTextStyle = style({});

export const textStyle = styleVariants({
	big: [
		baseTextStyle,
		{
			fontSize: vars.font.bigText.size,
			fontFamily: vars.font.bigText.family,
			lineHeight: vars.font.bigText.lineHeight,
		},
	],
	normal: [
		baseTextStyle,
		{
			fontSize: vars.font.normalText.size,
			fontFamily: vars.font.normalText.family,
			lineHeight: vars.font.normalText.lineHeight,
		},
	],
	small: [
		baseTextStyle,
		{
			fontSize: vars.font.smallText.size,
			fontFamily: vars.font.smallText.family,
			lineHeight: vars.font.smallText.lineHeight,
		},
	],
});
