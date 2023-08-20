import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { fixedSpace, relativeSpace } from "./utils";
import vars from "./variables.css";

export const glassEffectStyles = {
	backgroundColor: vars.color.background.emphasis,
	backdropFilter: `blur(${fixedSpace(4)})`,
	WebkitBackdropFilter: `blur(${fixedSpace(4)})`,
	border: vars.border.base,
	boxShadow: vars.boxShadow.base,
};

const textBlockStyle = style({
	padding: 0,
	margin: 0,
	width: `min(${relativeSpace(88)}, 100%)`,
});

export const headingTextBlockStyle = style([textBlockStyle]);

export const contentTextBlockStyle = style([
	textBlockStyle,
	{
		marginBottom: vars.space.sectionBottom,
		selectors: {
			"& + &": {
				marginTop: calc(vars.space.sectionBottom)
					.negate()
					.add(vars.space.midSectionBottom)
					.toString(),
			},
			"&:last-child": {
				marginBottom: 0,
			},
		},
	},
]);
