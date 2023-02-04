import {
	assignVars,
	createTheme,
	createThemeContract,
	style,
} from "@vanilla-extract/css";

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
	},
});

// TODO: execute https://coolors.co/contrast-checker/

const merigold = "#FCAE1E";
const merigoldLight = "#fff3dd";
const merigoldDark = "#6f4901";

const imperialRed = "#ED2939";
const imperialRedLight = "#fcdfe1";
const imperialRedDark = "#670910";

const black = "#000000";
const grayDarker = "#131313";
const grayDark = "#434343";
const gray = "#909090";
const grayLight = "#d1d1d1";
const grayLighter = "#e1e1e1";
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
		lineHeight: "2",
	},
	subtitle: {
		family: fontFamiliySansSerif,
		size: "2rem",
		lineHeight: "1.5",
	},
	bigText: {
		family: fontFamiliySansSerif,
		size: "1.25rem",
		lineHeight: "1.25",
	},
	normalText: {
		family: fontFamiliySansSerif,
		size: "1rem",
		lineHeight: "1.25",
	},
	smallText: {
		family: fontFamiliySansSerif,
		size: "0.75rem",
		lineHeight: "1.25",
	},
};

const space = {
	fixed: "8px",
	relative: "0.5rem",
} as const;

export const breakpoints = {
	xs: "20rem", // Mobile devices -- default case, shouldn't be used
	sm: "30rem", // iPads, Tablets
	md: "48rem", // Small screens, laptops
	lg: "64rem", // Desktops, large screens
	xl: "75rem", // Extra large screens, TV
} as const;

export type Breakpoint = keyof typeof breakpoints;

const borderRadius = {
	base: "8px",
	round: "50%",
} as const;

const lightThemeVars = {
	color: {
		background: { main: grayLighter, emphasis: white },
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
	boxShadow: { base: `0px 4px 10px 2px ${gray}` },
};
export const lightTheme = createTheme(vars, lightThemeVars);

const darkThemeVars = {
	color: {
		background: { main: grayDarker, emphasis: grayDark },
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
	boxShadow: { base: "none" },
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
