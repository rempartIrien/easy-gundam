import { style } from "@vanilla-extract/css";

import { relativeSpace } from "~/theme/utils";

export const sectionStyle = style({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginBottom: relativeSpace(4),
});
