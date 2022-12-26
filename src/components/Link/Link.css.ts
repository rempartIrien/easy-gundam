import { style } from "@vanilla-extract/css";

import { vars } from "~/theme/theme.css";

export const linkStyle = style({
  textDecoration: "none",
  borderBottom: `4px solid ${vars.color.primary.main} `,
  color: vars.color.primary.text,
  selectors: {
    [`&[target="_blank"]::after`]: {
      content: "↗",
    },
  },
});
