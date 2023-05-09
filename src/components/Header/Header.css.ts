import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

import { glassEffectStyles } from "~/theme/theme.css";
import { fixedSpace, from, relativeSpace } from "~/theme/utils";

const glassEffectWithBottomBorder: StyleRule = {
	...glassEffectStyles,
	borderTopStyle: "none",
	borderRightStyle: "none",
	borderLeftStyle: "none",
};

const smallBreakpoint = from("sm");

export const headerStyle = style({
	position: "sticky",
	top: 0,
	"@media": {
		[smallBreakpoint]: {
			...glassEffectWithBottomBorder,
		},
	},
});

export const collapsedHeaderStyle = style({
	...glassEffectStyles,
	borderTopStyle: "none",
	borderRightStyle: "none",
	borderLeftStyle: "none",
});

export const expandedHeaderMainRowStyle = style({
	visibility: "hidden",
	"@media": {
		[smallBreakpoint]: {
			visibility: "visible",
		},
	},
});

export const expandedHeaderContainerStyle = style({
	...glassEffectWithBottomBorder,
	position: "fixed",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: "block",
	"@media": {
		[smallBreakpoint]: {
			display: "none",
		},
	},
});

export const mainRowContainerStyle = style({
	display: "flex",
	paddingTop: fixedSpace(2),
	paddingBottom: fixedSpace(2),
	gap: fixedSpace(1),
});

export const desktopNavStyle = style({
	flex: 1,
	display: "none",
	"@media": {
		[smallBreakpoint]: {
			display: "flex",
		},
	},
});

export const menuIconStyle = style({
	cursor: "pointer",
	borderStyle: "none",
	marginRight: "auto",
	display: "block",
	"@media": {
		[smallBreakpoint]: {
			display: "none",
		},
	},
});

export const mobileNavStyle = style({
	flexDirection: "column",
	padding: `${fixedSpace(1)} ${relativeSpace(1)}`,
});
