import { style } from "@vanilla-extract/css";

import { textBlockStyles } from "~/theme/theme.css";

export const viewerStyle = style({
	...textBlockStyles,
});

export const linkStyle = style({
	display: "inline",
});
