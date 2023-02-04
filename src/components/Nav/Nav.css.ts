import { style } from "@vanilla-extract/css";

import { relativeSpace } from "~/theme/utils";

export const navStyle = style({});

export const listStyle = style({
	display: "flex",
	gap: relativeSpace(1),
	listStyle: "none",
	margin: 0,
	padding: 0,
});

export const listItemStyle = style({});
