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

export function hexToRgba(
	color: `#${string}`,
	alpha: number = 1,
): `rgba(${string})` {
	const hexToDecimal = (s: string) => parseInt(s.length === 1 ? s + s : s, 16);

	if (!Number.isFinite(alpha) || alpha > 1 || alpha < 0) {
		throw new Error(
			`Cannot use alpha value '${alpha}'. It should be a number between 0 and 1.`,
		);
	}

	const hasThreeCharacters = /^#([A-Fa-f\d])([A-Fa-f\d])([A-Fa-f\d])$/.exec(
		color,
	);
	const hasSixCharacters =
		/^#([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/.exec(color);

	const regexResult = hasSixCharacters || hasThreeCharacters;
	if (regexResult) {
		const [, r, g, b] = regexResult;
		return `rgba(${hexToDecimal(r)}, ${hexToDecimal(g)}, ${hexToDecimal(
			b,
		)}, ${alpha})`;
	}

	throw new Error(`Cannot convert '${color}' to decimal RGB color.`);
}
