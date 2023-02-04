import { calc } from "@vanilla-extract/css-utils";

import type { Breakpoint } from "./theme.css";
import { breakpoints } from "./theme.css";
import { vars } from "./theme.css";

export function fixedSpace(multiplier: number): string;
export function fixedSpace(topBottom: number, rightLeft: number): string;
export function fixedSpace(
	top: number,
	rightLeft: number,
	bottom: number,
): string;
export function fixedSpace(
	top: number,
	right: number,
	bottom: number,
	left: number,
): string;
export function fixedSpace(...multipliers: number[]): string {
	return space(vars.space.fixed, ...multipliers);
}

export function relativeSpace(multiplier: number): string;
export function relativeSpace(topBottom: number, rightLeft: number): string;
export function relativeSpace(
	top: number,
	rightLeft: number,
	bottom: number,
): string;
export function relativeSpace(
	top: number,
	right: number,
	bottom: number,
	left: number,
): string;
export function relativeSpace(...multipliers: number[]): string {
	return space(vars.space.relative, ...multipliers);
}

function space(
	baseSpace: `var(--${string})`,
	...multipliers: number[]
): string {
	return multipliers
		.map((multiplier) => calc(baseSpace).multiply(multiplier).toString())
		.join(" ");
}

export function from(size: Breakpoint): `screen and (min-width: ${string})` {
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
