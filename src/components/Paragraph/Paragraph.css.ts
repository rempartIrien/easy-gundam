import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { contentTextBlockStyle } from "~/theme/styles.css";
import vars from "~/theme/variables.css";

export const paragraphStyle = style([
	contentTextBlockStyle,
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
