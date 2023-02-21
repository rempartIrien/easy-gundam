import { style } from "@vanilla-extract/css";

import { glassEffectStyles, vars } from "~/theme/theme.css";

import { linkStyle } from "../Link/Link.css";

export const iconButtonStyle = style({});

export const menuContentStyle = style({
	...glassEffectStyles,
	zIndex: 1, // Be above header that also has a zIndex
});

export const buttonStyle = style([
	linkStyle.styled,
	{
		display: "block",
		borderStyle: "none",
		color: vars.color.text.main,
	},
]);

export const activeButtonStyle = style({
	color: vars.color.primary.text,
});
