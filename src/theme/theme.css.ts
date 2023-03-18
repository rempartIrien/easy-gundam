import {
	assignVars,
	createTheme,
	createThemeContract,
	style,
} from "@vanilla-extract/css";

import { fixedSpace, hexToRgba } from "./utils";

export const vars = createThemeContract({
	color: {
		background: { main: null, emphasis: null },
		text: { main: null, disabled: null },
		primary: { main: null, text: null, background: null },
		secondary: { main: null, text: null, background: null },
		info: { main: null, text: null, background: null },
		success: { main: null, text: null, background: null },
		warning: { main: null, text: null, background: null },
		error: { main: null, text: null, background: null },
	},
	font: {
		title: { family: null, size: null, lineHeight: null },
		subtitle: { family: null, size: null, lineHeight: null },
		bigText: { family: null, size: null, lineHeight: null },
		normalText: { family: null, size: null, lineHeight: null },
		smallText: { family: null, size: null, lineHeight: null },
	},
	space: {
		fixed: null,
		relative: null,
	},
	borderRadius: {
		base: null,
		round: null,
	},
	boxShadow: {
		base: null,
		header: null,
	},
	border: {
		base: null,
	},
});

// TODO: execute https://coolors.co/contrast-checker/

const merigold = "#FCAE1E";
const merigoldLight = "#fbdfaa";
const merigoldDark = "#6f4901";

const imperialRed = "#ED2939";
const imperialRedLight = "#fdc4c8";
const imperialRedDark = "#670910";

const black = "#000000";
const grayDarker = "#131313";
const grayDark = "#434343";
const gray = "#909090";
const grayLight = "#d1d1d1";
const grayLighter = "#f1f1f1";
const white = "#ffffff";

const candyApple = "#FF0800";
const candyAppleLight = "#ffdad9";
const candyAppleDark = "##660300";

const apricot = "#ED820E";
const apricotLight = "#fdecda";
const apricotDark = "#5f3406";

const emerald = "#028A0F";
const emeraldLight = "#c8fecd";
const emeraldDark = "#013706";

const cerulean = "#0492C2";
const ceruleanLight = "#d1f3fe";
const ceruleanDark = "#023a4e";

interface FontVariables {
	family: "M PLUS 1p";
	size: `${number}rem`;
	lineHeight: `${number}`;
}

const fontFamiliySansSerif = "M PLUS 1p";

const font: Record<
	"title" | "subtitle" | "bigText" | "normalText" | "smallText",
	FontVariables
> = {
	title: {
		family: fontFamiliySansSerif,
		size: "4rem",
		lineHeight: "1.3",
	},
	subtitle: {
		family: fontFamiliySansSerif,
		size: "2rem",
		lineHeight: "1.35",
	},
	bigText: {
		family: fontFamiliySansSerif,
		size: "1.25rem",
		lineHeight: "1.6",
	},
	normalText: {
		family: fontFamiliySansSerif,
		size: "1rem",
		lineHeight: "1.6",
	},
	smallText: {
		family: fontFamiliySansSerif,
		size: "0.75rem",
		lineHeight: "1.6",
	},
};

const space = {
	fixed: "8px",
	relative: "0.5rem",
} as const;

export const breakpoints = {
	xs: "20rem", // Mobile devices (320) -- default case, shouldn't be used
	sm: "30rem", // iPads, Tablets (480)
	md: "48rem", // Small screens, laptops (768)
	lg: "64rem", // Desktops, large screens (1024)
	xl: "75rem", // Extra large screens, TV (1200)
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const glassEffectStyles = {
	backgroundColor: vars.color.background.emphasis,
	backdropFilter: `blur(${fixedSpace(4)})`,
	border: vars.border.base,
	boxShadow: vars.boxShadow.base,
};

export const textBlockStyles = {
	padding: 0,
	margin: "0 0 1em",
	width: `min(${fixedSpace(88)}, 100%)`,
};

const borderRadius = {
	base: "4px",
	round: "50%",
} as const;

const lightThemeVars = {
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
	},
	font,
	space,
	borderRadius,
	boxShadow: {
		base: `0px 4px 10px 2px ${hexToRgba(gray, 0.5)}`,
		header: `0px 25px 20px -20px ${hexToRgba(gray, 0.5)}`,
	},
	border: { base: `1px solid ${grayLight}` },
};
export const lightTheme = createTheme(vars, lightThemeVars);

const darkThemeVars = {
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
	},
	font,
	space,
	borderRadius,
	boxShadow: { base: "none", header: "none" },
	border: { base: `1px solid ${grayDark}` },
};
export const darkTheme = createTheme(vars, darkThemeVars);

export const defaultTheme = style({
	vars: assignVars(vars, lightThemeVars),
	"@media": {
		"(prefers-color-scheme: dark)": {
			vars: assignVars(vars, darkThemeVars),
		},
	},
});
