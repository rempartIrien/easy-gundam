import { style, styleVariants } from "@vanilla-extract/css";

import { headingTextBlockStyles } from "~/theme/styles";
import vars from "~/theme/variables.css";

const baseHeadingStyle = style([
	...headingTextBlockStyles,
	{
		fontWeight: 700,
		color: vars.color.primary.main,
	},
]);

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
			marginBottom: vars.space.midSectionBottom,
		},
	],
});
