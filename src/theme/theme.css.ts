import { createTheme, createThemeContract } from "@vanilla-extract/css";

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
});

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
});
