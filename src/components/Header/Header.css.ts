import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/theme.css";
import { fixedSpace } from "~/theme/utils";

export const headerStyle = style({
	...glassEffectStyles,
	borderTopStyle: "none",
	borderRightStyle: "none",
	borderLeftStyle: "none",
	paddingTop: fixedSpace(2),
	paddingBottom: fixedSpace(2),
});

export const containerStyle = style({
	display: "flex",
});

export const navStyle = style({
	flex: 1,
});
