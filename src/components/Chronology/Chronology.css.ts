import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "~/theme/theme.css";
import { space } from "~/theme/utils";

export const chronologyStyle = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const chronologyItemStyle = style({
  display: "flex",
  alignItems: "stretch",
});

const borderWidth = "4px";
const gap = calc(borderWidth).divide(2).add(space(4)).toString();

export const yearStyle = style({
  borderRightWidth: borderWidth,
  borderRightStyle: "solid",
  borderRightColor: vars.color.primary.main,
  marginRight: gap,
  width: "20%",
  maxWidth: space(20),
  position: "relative",
  display: "inline-block",
  paddingRight: gap,
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
      right: calc(borderWidth).divide(2).add(space()).negate().toString(),
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
