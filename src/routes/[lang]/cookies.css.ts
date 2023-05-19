import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/styles.css";
import { relativeSpace } from "~/theme/utils";

export const buttonStyles = style({
	...glassEffectStyles,
	marginBottom: relativeSpace(2),
});
