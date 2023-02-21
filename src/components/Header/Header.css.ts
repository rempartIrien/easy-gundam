import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/theme.css";
import { fixedSpace, from } from "~/theme/utils";

export const headerStyle = style({
	...glassEffectStyles,
	borderTopStyle: "none",
	borderRightStyle: "none",
	borderLeftStyle: "none",
	paddingTop: fixedSpace(2),
	paddingBottom: fixedSpace(2),
});

export const containerStyle = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	"@media": {
		[from("md")]: {
			flexDirection: "row",
			alignItems: "center",
		},
	},
});

export const navStyle = style({
	flex: 1,
});
