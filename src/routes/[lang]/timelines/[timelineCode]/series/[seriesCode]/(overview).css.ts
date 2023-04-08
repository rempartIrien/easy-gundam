import { style } from "@vanilla-extract/css";

import { fixedSpace, from, relativeSpace } from "~/theme/utils";

export const containerstyle = style({
	"@media": {
		[from("lg")]: {
			display: "grid",
			gridTemplateColumns: "400px 1fr",
			gridTemplateRows: "auto 1fr",
			gridTemplateAreas: `
			"image synopsis"
			"image staff"
			"image adaptations"
			`,
			placeItems: "start stretch",
			gap: `${relativeSpace(4)} ${fixedSpace(4)}`,
		},
	},
});

export const synopsisStyle = style({
	gridArea: "synopsis",
});

export const imageStyle = style({
	gridArea: "image",
});

export const staffStyle = style({
	gridArea: "staff",
});

export const adaptationsStyle = style({
	gridArea: "adaptations",
});
