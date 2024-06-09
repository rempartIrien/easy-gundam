import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/styles";
import { fixedSpace, relativeSpace } from "~/theme/utils";

export const staffStyle = style({
	...glassEffectStyles,
	padding: `${relativeSpace(2)} ${fixedSpace(2)}`,
});
