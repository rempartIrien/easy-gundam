import { styleVariants } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

export const headingStyle = styleVariants({
	title: {
		fontSize: vars.font.title.size,
		fontFamily: vars.font.title.family,
		lineHeight: vars.font.title.lineHeight,
		color: vars.color.primary.main,
	},
	subtitle: {
		fontSize: vars.font.subtitle.size,
		fontFamily: vars.font.subtitle.family,
		lineHeight: vars.font.subtitle.lineHeight,
		color: vars.color.primary.text,
	},
});
