import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: { main: null },
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
    paragraph: { family: null, size: null, lineHeight: null },
  },
  space: {
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
const grayDark = "#999999";
const grayLight = "#dedede";
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

const font: Record<"title" | "subtitle" | "paragraph", FontVariables> = {
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
  paragraph: {
    family: fontFamiliySansSerif,
    size: "1rem",
    lineHeight: "1.25",
  },
};

const space = {
  base: "8px",
};

export const lightTheme = createTheme(vars, {
  color: {
    background: { main: white },
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
});

export const darkTheme = createTheme(vars, {
  color: {
    background: { main: black },
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
});
