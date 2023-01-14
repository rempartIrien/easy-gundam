import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

export const linkStyle = style({
	textDecoration: "none",
	color: vars.color.primary.text,
	selectors: {
		"&:hover": {
			color: vars.color.primary.main,
		},
		'&[target="_blank"]::after': {
			content: "↗",
		},
	},
});
