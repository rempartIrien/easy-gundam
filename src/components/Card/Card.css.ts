import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";
import { fixedSpace } from "~/theme/utils";

export const cardStyle = style({
	backgroundColor: vars.color.background.emphasis,
	padding: fixedSpace(2),
	boxShadow: vars.boxShadow.base,
	borderRadius: vars.borderRadius.base,
});
