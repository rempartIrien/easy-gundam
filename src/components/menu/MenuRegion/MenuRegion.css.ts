import { style } from "@vanilla-extract/css";

export const menuRegionStyle = style({
	position: "relative",
	zIndex: 2, // Be above header that also has a zIndex
});
