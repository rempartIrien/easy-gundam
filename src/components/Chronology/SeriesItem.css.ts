import { style } from "@vanilla-extract/css";

import { fixedSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const seriesItemStyle = style({
	display: "flex",
	gap: fixedSpace(2),
});

export const textBlockStyle = style({
	flex: 1,
	alignSelf: "stretch",
});

export const titleStyle = style({
	color: vars.color.primary.text,
	selectors: {
		[`${seriesItemStyle}:hover &`]: {
			color: vars.color.primary.main,
		},
	},
});
