import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { breakpoints, vars } from "~/theme/theme.css";
import { fixedSpace, from, relativeSpace } from "~/theme/utils";

export const containerStyle = style({
	display: "flex",
	flexDirection: "column",
	flex: 1,
});

export const contentStyle = style({
	paddingTop: relativeSpace(4),
	paddingBottom: relativeSpace(4),
	flex: 1,
});

export const headerStyle = style({
	zIndex: 1, // Be above all absolute-positioned elements
});

const footerSeparatorHeight = "2px";
const footerMarginTop = relativeSpace(4);

export const footerStyle = style({
	marginTop: relativeSpace(4),
	position: "relative",
	selectors: {
		"&::before": {
			content: "",
			display: "block",
			position: "absolute",
			height: footerSeparatorHeight,
			width: calc(`min(100%, ${breakpoints.xl})`)
				.subtract(calc(fixedSpace(2)).multiply(2).toString())
				.toString(),
			top: calc(footerSeparatorHeight)
				.subtract(footerMarginTop)
				.divide(2)
				.toString(),
			left: "50%",
			transform: "translateX(-50%)",
			backgroundColor: vars.color.primary.background,
		},
	},
	"@media": {
		[from("md")]: {
			selectors: {
				"&::before": {
					width: calc(`min(100%, ${breakpoints.xl})`)
						.subtract(calc(fixedSpace(2)).multiply(3).toString())
						.toString(),
				},
			},
		},
	},
});
