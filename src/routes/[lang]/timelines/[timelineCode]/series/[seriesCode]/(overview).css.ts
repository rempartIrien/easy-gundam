import { style } from "@vanilla-extract/css";

import { sectionStyle } from "~/components/Section/Section.css";
import { contentTextBlockStyles } from "~/theme/styles";
import { fixedSpace, from, relativeSpace } from "~/theme/utils";
import vars from "~/theme/variables.css";

export const containerstyle = style({
	selectors: {
		[`&.${sectionStyle}`]: {
			gap: fixedSpace(4),
			alignItems: "center",
			"@media": {
				[from("lg")]: {
					alignItems: "flex-start",
					flexDirection: "row",
				},
			},
		},
	},
});

export const textBlockStyle = style([
	...contentTextBlockStyles,
	{
		gap: relativeSpace(4),
		flex: 1,
	},
]);

export const synopsisStyle = style({
	marginBottom: vars.space.sectionBottom,
});

export const imageStyle = style({
	"@media": {
		[from("lg")]: {
			position: "sticky",
			top: relativeSpace(10),
		},
	},
});

export const staffStyle = style({
	marginBottom: vars.space.sectionBottom,
});

export const adaptationsStyle = style({});
