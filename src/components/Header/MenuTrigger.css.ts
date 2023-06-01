import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/styles.css";
import vars from "~/theme/variables.css";

export const menuTriggerStyle = style({
	...glassEffectStyles,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "2rem",
	width: "2rem",
	cursor: "pointer",
	backgroundColor: vars.color.background.button,
	color: vars.color.primary.main,
	borderRadius: vars.borderRadius.round,
	boxShadow: "none",
});
