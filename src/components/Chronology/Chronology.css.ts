import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "~/theme/theme.css";

export const chronologyStyle = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const chronologyItemStyle = style({
  display: "flex",
  alignItems: "stretch",
});

export const yearStyle = style({
  borderRightWidth: "4px",
  borderRightStyle: "solid",
  borderRightColor: vars.color.primary.main,
  marginRight: "32px",
  width: "20%",
  maxWidth: "160px",
  position: "relative",
  display: "inline-block",
  paddingRight: "32px",
  textAlign: "end",
  lineHeight: vars.font.paragraph.lineHeight,
  selectors: {
    "&::after": {
      flexShrink: 0,
      content: "",
      backgroundColor: vars.color.primary.main,
      borderRadius: "50%",
      width: "1em",
      height: "1em",
      display: "inline-block",
      position: "absolute",
      right: "-10px",
      top: calc(vars.font.paragraph.size)
        .multiply(vars.font.paragraph.lineHeight)
        .divide(2)
        .toString(),
      transform: "translateY(-50%)",
    },
  },
});

export const seriesStyle = style({
  flex: "1",
});
