import { style } from "@vanilla-extract/css";

import { glassEffectStyles, vars } from "~/theme/theme.css";
import { fixedSpace } from "~/theme/utils";

export const cardStyle = style({
	...glassEffectStyles,
	padding: fixedSpace(2),
	borderRadius: vars.borderRadius.base,
});
