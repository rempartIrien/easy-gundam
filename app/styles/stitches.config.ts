import { createStitches } from "@stitches/react";

export const { styled, createTheme, globalCss, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        text: "red",
        bgBody: "#f8f9fa",
        anchor: "green",
      },
    },
  });

export const darkTheme = createTheme("dark", {
  colors: {
    text: "blue",
    bgBody: "#191919",
    anchor: "black",
  },
});

globalCss({
  body: {
    color: "$text",
    backgroundColor: "$bgBody",
  },

  a: {
    color: "$anchor",
  },
})();
