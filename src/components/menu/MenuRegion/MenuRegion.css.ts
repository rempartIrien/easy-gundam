import { style } from "@vanilla-extract/css";

export const menuRegionStyle = style({
	position: "relative",
	zIndex: 20, // Be above header that also has a zIndex
});
