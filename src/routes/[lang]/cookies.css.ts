import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/theme.css";
import { relativeSpace } from "~/theme/utils";

export const buttonStyles = style({
	...glassEffectStyles,
	marginBottom: relativeSpace(1),
});
