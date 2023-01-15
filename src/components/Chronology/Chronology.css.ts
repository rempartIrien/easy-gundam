import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "~/theme/theme.css";
import { space } from "~/theme/utils";

const leftWidth = "20%";
const borderWidth = "4px";
const gap = calc(borderWidth).divide(2).add(space(4)).toString();

export const bulletPaddingTop = space(2);

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
			height: space(5),
			width: leftWidth,
			maxWidth: space(20),
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
	maxWidth: space(20),
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
			width: "1em",
			height: "1em",
			display: "inline-block",
			position: "absolute",
			right: calc(borderWidth).divide(2).add(space(1)).negate().toString(),
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
});
