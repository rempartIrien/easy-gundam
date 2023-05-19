import { style } from "@vanilla-extract/css";

import { linkStyle } from "~/components/Link/Link.css";
import { fixedSpace, relativeSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const buttonStyle = style([
	linkStyle.styled,
	{
		display: "block",
		width: "100%",
		textAlign: "start",
		borderStyle: "none",
		color: vars.color.text.main,
		padding: `${relativeSpace(1)} ${fixedSpace(2)}`,
	},
]);

export const activeButtonStyle = style({
	color: vars.color.primary.text,
});
