import { style, styleVariants } from "@vanilla-extract/css";

import vars from "~/theme/variables.css";

const baseLinkStyle = style({
	textDecoration: "none",
	// Keep it inline so that it wraps properly (https://stackoverflow.com/questions/62433455/is-it-possible-to-made-inline-block-elements-line-wrap-like-inline-text).
	display: "inline",
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

export const externalLinkStyle = style({
	"::after": {
		display: "inline", // Use inline to stick to the end of the link content.
		content: "---", // Add enough characters since we stay in `display: inline`.
		verticalAlign: "baseline",
		marginLeft: "0.25ch",
		mask: "url(/assets/icons/external-link.svg) center no-repeat",
		backgroundColor: vars.color.primary.text,
	},
	selectors: {
		"&:hover::after": {
			backgroundColor: vars.color.primary.main,
		},
	},
});
