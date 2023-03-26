import { style } from "@vanilla-extract/css";

import { fixedSpace, relativeSpace } from "~/theme/utils";

export const contentStyle = style({
	display: "flex",
	flexDirection: "column",
	gap: relativeSpace(2),
});

export const textStyle = style({
	padding: 0,
	margin: 0,
});

export const actionListStyle = style({
	display: "flex",
	gap: fixedSpace(2),
});

export const actionStyle = style({
	flex: 1,
});
