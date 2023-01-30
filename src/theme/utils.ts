import { calc } from "@vanilla-extract/css-utils";

import type { Breakpoint } from "./theme.css";
import { breakpoints } from "./theme.css";
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

export function from(size: Breakpoint): `screen and (min-width: ${number}px)` {
	const breakpoint = breakpoints[size];
	if (!breakpoint) {
		throw new Error(`Cannot get breakpoint value from key '${size}'`);
	}
	return `screen and (min-width: ${breakpoint})`;
}

export function shadow(
	color: `var(--${string})`,
): `var(--${string}) var(--${string})` {
	return `${vars.boxShadow.base} ${color}`;
}
