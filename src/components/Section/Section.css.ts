import { style } from "@vanilla-extract/css";

import vars from "~/theme/variables.css";

export const sectionStyle = style({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginBottom: vars.space.sectionBottom,
});
