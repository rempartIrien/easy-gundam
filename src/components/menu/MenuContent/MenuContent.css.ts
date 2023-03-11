import { style } from "@vanilla-extract/css";

import { glassEffectStyles, vars } from "~/theme/theme.css";
import { fixedSpace } from "~/theme/utils";

export const menuContentStyle = style({
	...glassEffectStyles,
	borderRadius: vars.borderRadius.base,
	listStyle: "none",
	margin: 0,
	padding: fixedSpace(1, 0),
	zIndex: 1, // Be above header that also has a zIndex
});
