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
		base: null,
	},
	breakpoint: {
		xs: null, // Mobile devices
		sm: null, // iPads, Tablets
		md: null, // Small screens, laptops
		lg: null, // Desktops, large screens
		xl: null, // Extra large screens, TV
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

const black = "#262626";
const grayDarker = "#515151";
const grayDark = "#909090";
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
	base: "8px",
} as const;

const breakpoint = {
	xs: "320px", // Mobile devices -- default case, shouldn't be used
	sm: "481px", // iPads, Tablets
	md: "769px", // Small screens, laptops
	lg: "1025px", // Desktops, large screens
	xl: "1201px", // Extra large screens, TV
} as const;

export type Breakpoint = keyof typeof breakpoint;

const borderRadius = {
	base: "4px",
	round: "50%",
} as const;

// This should be used with a color.
const boxShadow = {
	base: "0 3px 10px",
} as const;

const lightThemeVars = {
	color: {
		background: { main: white, emphasis: grayLighter },
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
	breakpoint,
	borderRadius,
	boxShadow,
};
export const lightTheme = createTheme(vars, lightThemeVars);

const darkThemeVars = {
	color: {
		background: { main: black, emphasis: grayDarker },
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
	breakpoint,
	borderRadius,
	boxShadow,
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
