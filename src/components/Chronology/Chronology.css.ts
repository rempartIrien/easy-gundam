import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "~/theme/theme.css";
import { fixedSpace, from, relativeSpace } from "~/theme/utils";

const leftWidth = "20%";
const borderWidth = "4px";
const bulletSize = fixedSpace(3);
const gap = calc(borderWidth).divide(2).add(fixedSpace(4)).toString();
const bulletPaddingTop = fixedSpace(2);
const yearColumnWidth = relativeSpace(20);

export const chronologyStyle = style({
	listStyle: "none",
	margin: 0,
	padding: 0,
	selectors: {
		[`&::before,
    &::after`]: {
			content: "",
			borderRightWidth: borderWidth,
			borderRightStyle: "dashed",
			borderRightColor: vars.color.primary.main,
			display: "block",
			height: relativeSpace(5),
			width: leftWidth,
			maxWidth: yearColumnWidth,
		},
	},
});

export const chronologyItemStyle = style({
	display: "flex",
	alignItems: "stretch",
});

export const yearStyle = style({
	borderRightWidth: borderWidth,
	borderRightStyle: "solid",
	borderRightColor: vars.color.primary.main,
	marginRight: gap,
	width: leftWidth,
	maxWidth: yearColumnWidth,
	position: "relative",
	display: "inline-block",
	paddingRight: gap,
	paddingTop: bulletPaddingTop,
	textAlign: "end",
	selectors: {
		"&::after": {
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
				.add("2px") // because of gap between text node and parent node
				.add(bulletPaddingTop)
				.toString(),
			transform: "translateY(-50%)",
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
	"@media": {
		[from("md")]: {
			gridTemplateColumns: "1fr 1fr",
		},
	},
});

export const seriesListItemStyle = style({});

export const seriesStyle = style({});
