import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";
import { fixedSpace } from "~/theme/utils";

export const seriesItemStyle = style({
	display: "flex",
	gap: fixedSpace(2),
});

export const titleStyle = style({
	color: vars.color.primary.text,
});
