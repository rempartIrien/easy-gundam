import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";
import { space } from "~/theme/utils";

export const cardStyle = style({
	backgroundColor: vars.color.background.emphasis,
	padding: space(2),
	boxShadow: vars.boxShadow.base,
	borderRadius: "8px",
});
