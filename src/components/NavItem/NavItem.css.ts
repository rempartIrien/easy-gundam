import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

export const navItemStyle = style({
	display: "inline-block",
	textDecoration: "none",
	color: vars.color.text.main,
	borderBottomWidth: "4px",
	borderBottomStyle: "solid",
	borderBottomColor: "transparent",
	transition: "0.2s ease border-bottom-color",
	selectors: {
		"&:hover": {
			color: vars.color.primary.main,
		},
	},
});

export const navItemActiveClass = style({
	borderBottomColor: vars.color.primary.main,
});
