import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/styles";
import { relativeSpace } from "~/theme/utils";

export const buttonStyles = style({
	...glassEffectStyles,
	marginBottom: relativeSpace(2),
});
