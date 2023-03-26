import { style } from "@vanilla-extract/css";

import { fixedSpace, from, relativeSpace } from "~/theme/utils";

export const regionStyle = style({
	position: "fixed",
	bottom: 0,
	right: 0,
	left: 0,
});

export const listStyle = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	gap: relativeSpace(2),
	paddingRight: fixedSpace(2),
	paddingLeft: fixedSpace(2),
	"@media": {
		[from("md")]: {
			paddingRight: fixedSpace(3),
			paddingLeft: fixedSpace(3),
		},
	},
});
