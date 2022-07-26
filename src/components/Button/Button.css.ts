import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

export const buttonStyle = style({
  color: "#fff",
  backgroundColor: "#333",
  borderStyle: "none",
  selectors: {
    "&:hover": {
      color: vars.color.brand,
    },
  },
});
