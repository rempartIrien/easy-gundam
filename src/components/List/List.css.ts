import { style } from "@vanilla-extract/css";

import { textBlockStyles } from "~/theme/styles.css";
import { relativeSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const listStyle = style({
	...textBlockStyles,
	marginBottom: relativeSpace(2),
	paddingLeft: relativeSpace(4),
	fontSize: vars.font.normalText.size,
	fontFamily: vars.font.normalText.family,
	lineHeight: vars.font.normalText.lineHeight,
});
