import { createTheme, createThemeContract } from "@vanilla-extract/css";

// The contract - or "shape" of theme
export const vars = createThemeContract({
  color: {
    brand: null,
  },
  font: {
    body: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

// Secondary theme
export const darkTheme = createTheme(vars, {
  color: {
    brand: "pink",
  },
  font: {
    body: "comic sans ms",
  },
});
