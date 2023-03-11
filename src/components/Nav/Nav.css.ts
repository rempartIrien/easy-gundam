import { style } from "@vanilla-extract/css";

import { fixedSpace } from "~/theme/utils";

export const navStyle = style({});

export const listStyle = style({
	display: "flex",
	gap: fixedSpace(2),
	listStyle: "none",
	margin: 0,
	padding: 0,
});

export const listItemStyle = style({});
