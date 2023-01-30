import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";
import { space } from "~/theme/utils";

export const bulletPaddingTop = space(2);

export const seriesItemStyle = style({
	display: "flex",
	gap: space(2),
});

export const titleStyle = style({
	color: vars.color.primary.text,
});
