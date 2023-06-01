import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import vars from "~/theme/variables.css";

export const adaptationStyle = style({});

export const titleStyle = style({
	color: vars.color.primary.text,
});

export const releaseOnStyle = style({
	selectors: {
		"&:not(:last-child)": {
			marginBottom: calc(vars.space.midSectionBottom).divide(2).toString(),
		},
	},
});
