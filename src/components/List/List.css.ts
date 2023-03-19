import { style } from "@vanilla-extract/css";

import { textBlockStyles } from "~/theme/theme.css";
import { relativeSpace } from "~/theme/utils";

export const listStyle = style({
	...textBlockStyles,
	marginBottom: relativeSpace(2),
	paddingLeft: relativeSpace(4),
});
