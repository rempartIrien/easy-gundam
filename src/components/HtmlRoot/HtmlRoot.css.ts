import { style } from "@vanilla-extract/css";

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
