import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

import { bulletPaddingTop } from "./Chronology.css";

export const seriesItemStyle = style({
	display: "flex",
});

export const contentStyle = style({
	padding: bulletPaddingTop,
});

export const titleStyle = style({
	color: vars.color.primary.text,
});
