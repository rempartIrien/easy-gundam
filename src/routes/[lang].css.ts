import { style } from "@vanilla-extract/css";

import { fixedSpace } from "~/theme/utils";

export const headerStyle = style({
	backdropFilter: `blur(${fixedSpace(8)})`,
	position: "sticky",
	top: 0,
	zIndex: 1,
});
