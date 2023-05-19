import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/styles.css";
import { fixedSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const cardStyle = style({
	...glassEffectStyles,
	padding: fixedSpace(2),
	borderRadius: vars.borderRadius.base,
});
