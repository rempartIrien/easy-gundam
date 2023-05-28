import { style, styleVariants } from "@vanilla-extract/css";

import { textBlockStyles } from "~/theme/styles.css";
import vars from "~/theme/variables.css";

const baseHeadingStyle = style({
	...textBlockStyles,
	fontWeight: 700,
});

// See https://css-tricks.com/dark-mode-and-variable-fonts/
export const darkModeStyle = style({
	fontWeight: 600,
});

export const headingStyle = styleVariants({
	title: [
		baseHeadingStyle,
		{
			fontSize: vars.font.title.size,
			fontFamily: vars.font.title.family,
			lineHeight: vars.font.title.lineHeight,
			color: vars.color.primary.main,
			marginBottom: vars.space.sectionBottom,
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
			marginBottom: vars.space.midSectionBottom,
		},
	],
});
