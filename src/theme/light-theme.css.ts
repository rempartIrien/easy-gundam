import { createTheme } from "@vanilla-extract/css";

import {
	apricot,
	apricotDark,
	apricotLight,
	black,
	candyApple,
	candyAppleDark,
	candyAppleLight,
	cerulean,
	ceruleanDark,
	ceruleanLight,
	emerald,
	emeraldDark,
	emeraldLight,
	gray,
	grayDark,
	grayLight,
	grayLighter,
	imperialRed,
	imperialRedDark,
	imperialRedLight,
	merigold,
	merigoldDark,
	merigoldLight,
	white,
} from "./colors";
import commonVars from "./common-variables.css";
import toasts from "./toasts";
import { hexToRgba } from "./utils";
import vars from "./variables.css";

export const lightThemeVars = {
	...commonVars,
	color: {
		background: { main: grayLighter, emphasis: hexToRgba(white, 0.6) },
		text: { main: black, disabled: grayDark },
		primary: {
			main: imperialRed,
			text: imperialRedDark,
			background: imperialRedLight,
		},
		secondary: {
			main: merigold,
			text: merigoldDark,
			background: merigoldLight,
		},
		info: { main: cerulean, text: ceruleanDark, background: ceruleanLight },
		success: { main: emerald, text: emeraldDark, background: emeraldLight },
		warning: { main: apricot, text: apricotDark, background: apricotLight },
		error: {
			main: candyApple,
			text: candyAppleDark,
			background: candyAppleLight,
		},
		toaster: toasts,
	},
	boxShadow: {
		base: `0px 4px 10px 2px ${hexToRgba(gray, 0.5)}`,
		header: `0px 25px 20px -20px ${hexToRgba(gray, 0.5)}`,
	},
	border: { base: `1px solid ${grayLight}` },
};

export const lightTheme = createTheme(vars, lightThemeVars);
