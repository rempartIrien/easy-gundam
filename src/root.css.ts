import { globalStyle, style } from "@vanilla-extract/css";

import vars from "./theme/variables.css";

export const htmlRootStyle = style({
	fontSize: "100%",
	height: "100vh",
	"@media": {
		// https://aykevl.nl/2014/09/fix-jumping-scrollbar
		"screen and (min-width: 960px)": {
			marginLeft: "calc(100vw - 100%)",
			marginRight: 0,
		},
	},
});

// We cannot use theme variables in global style so we need regular style.
export const bodyStyle = style({
	boxSizing: "border-box",
	backgroundColor: vars.color.background.main,
	color: vars.color.text.main,
	minHeight: "100%",
	display: "flex",
	flexDirection: "column",
});

// We cannot target other element than the one that has the class in a regular
// style so we need global style to do that.
globalStyle("body *, body *::before, body *::after", {
	boxSizing: "inherit",
});
