import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { contentTextBlockStyles } from "~/theme/styles";
import vars from "~/theme/variables.css";

export const paragraphStyle = style([
	...contentTextBlockStyles,
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
