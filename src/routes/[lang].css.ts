import { style } from "@vanilla-extract/css";

import { relativeSpace } from "~/theme/utils";

export const containerStyle = style({
	display: "flex",
	flexDirection: "column",
	flex: 1,
});

export const contentStyle = style({
	paddingTop: relativeSpace(4),
	paddingBottom: relativeSpace(4),
	display: "flex",
	flexDirection: "column",
	flex: 1,
	justifyContent: "space-between",
});

export const headerStyle = style({
	position: "sticky",
	top: 0,
	zIndex: 1, // Be above all absolute-positioned elements
});

export const footerStyle = style({
	marginTop: relativeSpace(8),
});
