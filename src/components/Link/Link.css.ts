import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

const baseLinkStyle = style({
	textDecoration: "none",
	display: "inline-flex",
	alignItems: "center",
	gap: "0.5ch",
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
