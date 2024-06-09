import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/styles";
import { fixedSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const menuContentStyle = style({
	...glassEffectStyles,
	borderRadius: vars.borderRadius.base,
	listStyle: "none",
	margin: 0,
	padding: fixedSpace(1, 0),
});
