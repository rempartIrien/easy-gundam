import { style } from "@vanilla-extract/css";

import breakpoints from "~/theme/breakpoints";
import { fixedSpace, from } from "~/theme/utils";

export const containerStyle = style({
	margin: "0 auto",
	width: `min(100%, ${breakpoints.xl})`,
	paddingRight: fixedSpace(2),
	paddingLeft: fixedSpace(2),
	"@media": {
		[from("md")]: {
			paddingRight: fixedSpace(3),
			paddingLeft: fixedSpace(3),
		},
	},
});
