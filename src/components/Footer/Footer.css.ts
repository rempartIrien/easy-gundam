import { style } from "@vanilla-extract/css";

import { fixedSpace, from, relativeSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const footerStyle = style({
	paddingTop: relativeSpace(4),
	paddingBottom: relativeSpace(4),
});

export const containerStyle = style({
	display: "flex",
	gap: fixedSpace(4),
	flexDirection: "column",
	"@media": {
		[from("lg")]: {
			flexDirection: "row-reverse",
			alignItems: "flex-start",
			justifyContent: "space-between",
		},
	},
});

export const copyrightStyle = style({
	fontSize: vars.font.smallText.size,
	lineHeight: vars.font.smallText.lineHeight,
	fontFamily: vars.font.smallText.family,
});

export const linkListStyle = style({
	listStyle: "none",
	padding: 0,
	margin: 0,
	display: "flex",
	gap: fixedSpace(4),
	justifyContent: "center",
	"@media": {
		[from("lg")]: {
			gap: relativeSpace(1),
			justifyContent: "flex-start",
			flexDirection: "column",
		},
	},
});
