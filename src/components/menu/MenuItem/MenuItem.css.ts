import { style } from "@vanilla-extract/css";

import { linkStyle } from "~/components/Link/Link.css";
import { vars } from "~/theme/theme.css";
import { fixedSpace, relativeSpace } from "~/theme/utils";

export const buttonStyle = style([
	linkStyle.styled,
	{
		display: "block",
		borderStyle: "none",
		color: vars.color.text.main,
		padding: `${relativeSpace(1)} ${fixedSpace(2)}`,
	},
]);

export const activeButtonStyle = style({
	color: vars.color.primary.text,
});
