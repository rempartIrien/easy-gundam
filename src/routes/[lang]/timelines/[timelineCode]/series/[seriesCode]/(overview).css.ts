import { style } from "@vanilla-extract/css";

import { textBlockStyles } from "~/theme/styles.css";
import { fixedSpace, from, relativeSpace } from "~/theme/utils";

export const containerstyle = style({
	gap: fixedSpace(4),
	alignItems: "center",
	"@media": {
		[from("lg")]: {
			alignItems: "flex-start",
			flexDirection: "row",
		},
	},
});

export const textBlockStyle = style({
	...textBlockStyles,
	gap: relativeSpace(4),
	flex: 1,
});

export const synopsisStyle = style({});

export const imageStyle = style({});

export const staffStyle = style({});

export const adaptationsStyle = style({});
