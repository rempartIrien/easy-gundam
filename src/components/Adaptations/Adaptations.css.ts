import { style } from "@vanilla-extract/css";

import vars from "~/theme/variables.css";

export const adaptationsStyle = style({
	display: "flex",
	flexDirection: "column",
	gap: vars.space.midSectionBottom,
});
