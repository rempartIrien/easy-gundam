import { calc } from "@vanilla-extract/css-utils";

import { vars } from "./theme.css";

export function space(multiplier: number): string;
export function space(topBottom: number, rightLeft: number): string;
export function space(top: number, rightLeft: number, bottom: number): string;
export function space(
  top: number,
  right: number,
  bottom: number,
  left: number,
): string;
export function space(...multipliers: number[]): string {
  return multipliers
    .map((multiplier) => calc(vars.space.base).multiply(multiplier).toString())
    .join(" ");
}
