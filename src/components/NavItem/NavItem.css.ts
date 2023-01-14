import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

export const navItemStyle = style({
	textDecoration: "none",
	color: vars.color.text.main,
	selectors: {
		"&:hover": {
			color: vars.color.primary.main,
		},
	},
});

export const navItemActiveClass = style({
	borderBottom: `4px solid ${vars.color.primary.main} `,
});
