import { style } from "@vanilla-extract/css";

export const headerStyle = style({
	position: "sticky",
	top: 0,
	zIndex: 1, // Be above all absolute-positioned elements
});
