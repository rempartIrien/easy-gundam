import { style } from "@vanilla-extract/css";

import { textBlockStyles } from "~/theme/theme.css";
import { relativeSpace } from "~/theme/utils";

export const paragraphStyle = style({
	...textBlockStyles,
	marginBottom: relativeSpace(2),
});
