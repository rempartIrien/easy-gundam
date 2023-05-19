import { assignVars, style } from "@vanilla-extract/css";

import { darkThemeVars } from "./dark-theme.css";
import { lightThemeVars } from "./light-theme.css";
import vars from "./variables.css";

export const defaultTheme = style({
	vars: assignVars(vars, lightThemeVars),
	"@media": {
		"(prefers-color-scheme: dark)": {
			vars: assignVars(vars, darkThemeVars),
		},
	},
});
