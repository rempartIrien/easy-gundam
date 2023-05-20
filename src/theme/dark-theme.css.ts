import { assignVars, style } from "@vanilla-extract/css";

import {
	apricot,
	apricotDark,
	apricotLight,
	candyApple,
	candyAppleDark,
	candyAppleLight,
	cerulean,
	ceruleanDark,
	ceruleanLight,
	emerald,
	emeraldDark,
	emeraldLight,
	grayDark,
	grayDarker,
	grayLight,
	imperialRed,
	imperialRedDark,
	imperialRedLight,
	merigold,
	merigoldDark,
	merigoldLight,
	white,
} from "./colors";
import commonVars from "./common-variables.css";
import { regularScreenFonts, smallScreenFonts } from "./fonts";
import toasts from "./toasts";
import { from, hexToRgba } from "./utils";
import vars from "./variables.css";

export const darkThemeVars = {
	...commonVars,
	color: {
		background: { main: grayDarker, emphasis: hexToRgba(grayDark, 0.5) },
		text: { main: white, disabled: grayLight },
		primary: { main: merigold, text: merigoldLight, background: merigoldDark },
		secondary: {
			main: imperialRed,
			text: imperialRedLight,
			background: imperialRedDark,
		},
		info: { main: cerulean, text: ceruleanLight, background: ceruleanDark },
		success: { main: emerald, text: emeraldLight, background: emeraldDark },
		warning: { main: apricot, text: apricotLight, background: apricotDark },
		error: {
			main: candyApple,
			text: candyAppleLight,
			background: candyAppleDark,
		},
		toaster: toasts,
	},
	boxShadow: { base: "none", header: "none" },
	border: { base: `1px solid rgba(${white}, 0.125)` },
};

export const darkTheme = style({
	vars: assignVars(vars, {
		...darkThemeVars,
		font: smallScreenFonts,
	}),
	"@media": {
		[from("md")]: {
			vars: assignVars(vars.font, regularScreenFonts),
		},
	},
});
