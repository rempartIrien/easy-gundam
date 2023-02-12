import { style } from "@vanilla-extract/css";

import { relativeSpace } from "~/theme/utils";

export const contentStyle = style({
	padding: `${relativeSpace(4)} 0`,
});
