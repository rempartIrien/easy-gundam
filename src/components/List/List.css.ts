import { style } from "@vanilla-extract/css";

import { contentTextBlockStyles } from "~/theme/styles";
import { relativeSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const listStyle = style([
	...contentTextBlockStyles,
	{
		paddingLeft: relativeSpace(4),
		fontSize: vars.font.normalText.size,
		fontFamily: vars.font.normalText.family,
		lineHeight: vars.font.normalText.lineHeight,
	},
]);
