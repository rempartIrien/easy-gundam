import { assignVars, style } from "@vanilla-extract/css";

import { darkThemeVars } from "./dark-theme.css";
import { regularScreenFonts, smallScreenFonts } from "./fonts";
import { lightThemeVars } from "./light-theme.css";
import { from } from "./utils";
import vars from "./variables.css";

export const defaultTheme = style({
	vars: assignVars(vars, { ...lightThemeVars, font: smallScreenFonts }),
	"@media": {
		"(prefers-color-scheme: dark)": {
			vars: assignVars(vars, { ...darkThemeVars, font: smallScreenFonts }),
		},
		[from("md")]: {
			vars: assignVars(vars.font, regularScreenFonts),
		},
	},
});
