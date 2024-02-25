import { style } from "@vanilla-extract/css";

import vars from "~/theme/variables.css";

export const titleStyle = style({
	fontFamily: vars.font.title.family,
	fontSize: vars.font.title.size,
	lineHeight: vars.font.title.lineHeight,
});

export const paragraphStyle = style({});
