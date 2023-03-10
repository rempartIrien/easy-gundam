import { style } from "@vanilla-extract/css";

import { linkStyle } from "~/components/Link/Link.css";
import { vars } from "~/theme/theme.css";

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
