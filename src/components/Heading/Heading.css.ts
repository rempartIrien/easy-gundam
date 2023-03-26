import { style, styleVariants } from "@vanilla-extract/css";

import { textBlockStyles, vars } from "~/theme/theme.css";
import { relativeSpace } from "~/theme/utils";

const baseHeadingStyle = style({
	...textBlockStyles,
});

export const headingStyle = styleVariants({
	title: [
		baseHeadingStyle,
		{
			fontSize: vars.font.title.size,
			fontFamily: vars.font.title.family,
			lineHeight: vars.font.title.lineHeight,
			color: vars.color.primary.main,
			marginBottom: relativeSpace(4),
			width: "100%",
		},
	],
	subtitle: [
		baseHeadingStyle,
		{
			fontSize: vars.font.subtitle.size,
			fontFamily: vars.font.subtitle.family,
			lineHeight: vars.font.subtitle.lineHeight,
			color: vars.color.primary.text,
			marginBottom: relativeSpace(2),
		},
	],
});
