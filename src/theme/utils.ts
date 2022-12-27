import { calc } from "@vanilla-extract/css-utils";

import { vars } from "./theme.css";

export const space = (multiplier: number = 1) =>
  calc(vars.space.base).multiply(multiplier).toString();
