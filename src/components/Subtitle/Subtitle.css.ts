import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

export const subtitleStyle = style({
	fontSize: vars.font.title.size,
	fontFamily: vars.font.title.family,
	lightingColor: vars.font.title.lineHeight,
	color: vars.color.primary.main,
});
