import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "./theme/theme.css";

// We cannot use theme variables in global style so we need regular style.
export const bodyStyle = style({
	boxSizing: "border-box",
	backgroundColor: vars.color.background.main,
	color: vars.color.text.main,
	minHeight: "100%",
});

// We cannot target other element than the one that has the class in a regular
// style so we need global style to do that.
globalStyle("body *, body *::before, body *::after", {
	boxSizing: "inherit",
});
