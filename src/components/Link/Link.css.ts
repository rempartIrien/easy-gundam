import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

const baseLinkStyle = style({
	textDecoration: "none",
	selectors: {
		'&[target="_blank"]::after': {
			content: "↗",
		},
	},
});

export const linkStyle = styleVariants({
	styled: [
		baseLinkStyle,
		{
			color: vars.color.primary.text,
			selectors: {
				"&:hover": {
					color: vars.color.primary.main,
				},
			},
		},
	],
	unstyled: [baseLinkStyle, { color: "inherit" }],
});
