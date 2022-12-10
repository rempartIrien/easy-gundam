import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme/theme.css";

globalStyle("html", {
  fontSize: "100%",
  "@media": {
    // https://aykevl.nl/2014/09/fix-jumping-scrollbar
    "screen and (min-width: 960px)": {
      marginLeft: "calc(100vw - 100%)",
      marginRight: 0,
    },
  },
});

globalStyle("body", {
  boxSizing: "border-box",
  backgroundColor: vars.color.background.main,
  color: vars.color.text.main,
  minHeight: "100%",
});

globalStyle("body *, body *::before, body *::after", {
  boxSizing: "inherit",
});
