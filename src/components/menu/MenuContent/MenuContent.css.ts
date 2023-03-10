import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/theme.css";

export const menuContentStyle = style({
	...glassEffectStyles,
	listStyle: "none",
	margin: 0,
	padding: 0, // FIXME:
	zIndex: 1, // Be above header that also has a zIndex
});
