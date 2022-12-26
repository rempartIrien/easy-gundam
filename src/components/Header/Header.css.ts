import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
});

export const navStyle = style({
  flex: 1,
});

export const navItemStyle = style({
  selectors: {
    "& + &": {
      marginLeft: "8px",
    },
  },
});
