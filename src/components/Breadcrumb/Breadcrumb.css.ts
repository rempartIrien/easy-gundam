import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";
import { fixedSpace, from, relativeSpace } from "~/theme/utils";

const mediumBreakpoint = from("md");
const gap = fixedSpace(0.5);

export const breadcrumbStyle = style({
	marginBottom: relativeSpace(4),
});

export const listStyle = style({
	margin: 0,
	padding: 0,
	display: "flex",
	gap,
});

const flexItem = style({
	display: "flex",
	alignItems: "center",
});

export const listItemStyle = style([
	flexItem,
	{
		gap,
		selectors: {
			"&::before": { display: "none" },
			"&:not(:nth-last-child(2))": {
				display: "none",
			},
		},
		"@media": {
			[mediumBreakpoint]: {
				selectors: {
					"&:not(:nth-last-child(2))": {
						display: "flex",
					},
				},
			},
		},
	},
]);

export const linkStyle = style([flexItem]);

const chevronStyle = style({
	width: "1.25rem",
	height: "1.25rem",
	color: vars.color.primary.main,
});

export const chevronRightStyle = style([
	chevronStyle,
	{
		display: "none",
		"@media": {
			[mediumBreakpoint]: {
				display: "block",
			},
		},
	},
]);

export const chevronLeftStyle = style([
	chevronStyle,
	{
		display: "block",
		"@media": {
			[mediumBreakpoint]: {
				display: "none",
			},
		},
	},
]);
