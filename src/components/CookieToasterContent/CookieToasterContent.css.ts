import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { fixedSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const contentStyle = style({
	display: "block",
	flexDirection: "column",
});

export const textStyle = style({
	margin: 0,
	marginBottom: calc(vars.space.midSectionBottom).divide(2).toString(),
	selectors: {
		"&:last-of-type": {
			marginBottom: calc(vars.space.midSectionBottom).toString(),
		},
	},
});

export const actionListStyle = style({
	display: "flex",
	gap: fixedSpace(2),
});

export const actionStyle = style({
	flex: 1,
});
