import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { fixedSpace, from, relativeSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

const borderWidth = "4px";
const yearWidth = calc(borderWidth).divide(2).add("50%").toString();
const bulletSize = fixedSpace(3);
const gap = calc(borderWidth).divide(2).add(fixedSpace(4)).toString();
const bulletPaddingTop = fixedSpace(2);
const yearColumnWidth = relativeSpace(20);

const beginEndBorderStyles: StyleRule = {
	content: "",
	borderRightWidth: borderWidth,
	borderRightStyle: "dashed",
	borderRightColor: vars.color.primary.main,
	display: "block",
	height: relativeSpace(5),
	width: yearWidth,
	maxWidth: yearColumnWidth,
};

export const chronologyStyle = style({
	listStyle: "none",
	margin: 0,
	padding: 0,
	"@media": {
		[from("md")]: {
			"::before": beginEndBorderStyles,
			"::after": beginEndBorderStyles,
		},
		[from("lg")]: {
			"::before": { maxWidth: "none" },
			"::after": { maxWidth: "none" },
		},
	},
});

export const chronologyItemStyle = style({
	"@media": {
		[from("md")]: {
			display: "flex",
			alignItems: "stretch",
		},
		[from("lg")]: {
			selectors: {
				"&:nth-of-type(even)": {
					flexDirection: "row-reverse",
				},
			},
		},
	},
});

export const yearStyle = style({
	marginBottom: vars.space.midSectionBottom,
	color: vars.color.primary.text,
	textAlign: "center",
	"@media": {
		[from("md")]: {
			marginBottom: 0,
			borderRightWidth: borderWidth,
			borderRightStyle: "solid",
			borderRightColor: vars.color.primary.main,
			marginRight: gap,
			width: yearWidth,
			maxWidth: yearColumnWidth,
			position: "relative",
			display: "inline-block",
			paddingRight: gap,
			paddingTop: bulletPaddingTop,
			textAlign: "end",
			"::after": {
				flexShrink: 0,
				content: "",
				backgroundColor: vars.color.primary.main,
				borderRadius: "50%",
				width: bulletSize,
				height: bulletSize,
				display: "inline-block",
				position: "absolute",
				right: calc(borderWidth).add(bulletSize).divide(2).negate().toString(),
				top: calc(vars.font.bigText.size)
					.multiply(vars.font.bigText.lineHeight)
					.divide(2)
					.add(bulletPaddingTop)
					.toString(),
				transform: "translateY(-50%)",
			},
		},
		[from("lg")]: {
			maxWidth: "none",
			selectors: {
				[`${chronologyItemStyle}:nth-of-type(even) &`]: {
					borderRightWidth: 0,
					borderLeftWidth: borderWidth,
					borderLeftStyle: "solid",
					borderLeftColor: vars.color.primary.main,
					textAlign: "start",
					paddingRight: 0,
					paddingLeft: gap,
					marginRight: 0,
					marginLeft: gap,
				},
				[`${chronologyItemStyle}:nth-of-type(even) &::after`]: {
					right: 0,
					left: calc(borderWidth).add(bulletSize).divide(2).negate().toString(),
				},
			},
		},
	},
});

export const seriesListStyle = style({
	flex: "1",
	listStyle: "none",
	padding: 0,
	margin: 0,
	display: "grid",
	gap: relativeSpace(4),
	gridTemplateColumns: "1fr",
	paddingBottom: relativeSpace(4),
});

export const seriesListItemStyle = style({});

export const seriesStyle = style({});
