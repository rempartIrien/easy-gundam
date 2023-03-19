import { style } from "@vanilla-extract/css";

import { relativeSpace } from "~/theme/utils";

export const contentStyle = style({
	paddingTop: relativeSpace(4),
	paddingBottom: relativeSpace(4),
});

export const headerStyle = style({
	position: "sticky",
	top: 0,
	zIndex: 1, // Be above all absolute-positioned elements
});
