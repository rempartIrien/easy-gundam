import { style } from "@vanilla-extract/css";

import { textBlockStyles } from "~/theme/styles.css";

export const viewerStyle = style({
	...textBlockStyles,
});

export const linkStyle = style({
	display: "inline",
});
