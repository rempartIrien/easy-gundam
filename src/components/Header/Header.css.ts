import { style } from "@vanilla-extract/css";

import { fixedSpace } from "~/theme/utils";

export const headerStyle = style({
	paddingTop: fixedSpace(2),
	paddingBottom: fixedSpace(2),
});

export const containerStyle = style({
	display: "flex",
});

export const navStyle = style({
	flex: 1,
});
