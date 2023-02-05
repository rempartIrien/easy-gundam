import { style } from "@vanilla-extract/css";

import { breakpoints } from "~/theme/theme.css";
import { fixedSpace } from "~/theme/utils";

export const containerStyle = style({
	margin: "0 auto",
	width: `min(100%, ${breakpoints.xl})`,
	paddingRight: fixedSpace(2),
	paddingLeft: fixedSpace(2),
});
