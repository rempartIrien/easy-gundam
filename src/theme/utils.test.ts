import { describe, expect, it, vi } from "vitest";

vi.mock("./theme.css", () => ({
	vars: {
		color: {
			background: {
				main: "var(--color-background-main)",
				emphasis: "var(--color-background-emphasis)",
			},
		},
		space: { base: "var(--space-base)" },
		breakpoint: {
			xs: "var(--breakpoint-xs)",
			sm: "var(--breakpoint-sm)",
			md: "var(--breakpoint-md)",
			lg: "var(--breakpoint-lg)",
			xl: "var(--breakpoint-xl)",
		},
		boxShadow: { base: "var(--boxShadow-base)" },
	},
}));

import type { Breakpoint } from "./theme.css";
import { vars } from "./theme.css";
import { from, shadow, space } from "./utils";

describe("space", () => {
	it("should exist", () => {
		expect(space).toBeDefined();
	});

	it("should convert one value", () => {
		expect(space(1)).toBe("calc(var(--space-base) * 1)");
		expect(space(3)).toBe("calc(var(--space-base) * 3)");
		expect(space(-3)).toBe("calc(var(--space-base) * -3)");
	});

	it("should convert two values", () => {
		expect(space(1, 2)).toBe(
			"calc(var(--space-base) * 1) calc(var(--space-base) * 2)",
		);
		expect(space(3, 4)).toBe(
			"calc(var(--space-base) * 3) calc(var(--space-base) * 4)",
		);
		expect(space(-3, 4)).toBe(
			"calc(var(--space-base) * -3) calc(var(--space-base) * 4)",
		);
	});

	it("should convert three values", () => {
		expect(space(1, 2, 5)).toBe(
			"calc(var(--space-base) * 1) calc(var(--space-base) * 2) calc(var(--space-base) * 5)",
		);
		expect(space(3, 4, 6)).toBe(
			"calc(var(--space-base) * 3) calc(var(--space-base) * 4) calc(var(--space-base) * 6)",
		);
		expect(space(-3, 4, -6)).toBe(
			"calc(var(--space-base) * -3) calc(var(--space-base) * 4) calc(var(--space-base) * -6)",
		);
	});

	it("should convert four values", () => {
		expect(space(1, 2, 5, 7)).toBe(
			"calc(var(--space-base) * 1) calc(var(--space-base) * 2) calc(var(--space-base) * 5) calc(var(--space-base) * 7)",
		);
		expect(space(3, 4, 6, -8)).toBe(
			"calc(var(--space-base) * 3) calc(var(--space-base) * 4) calc(var(--space-base) * 6) calc(var(--space-base) * -8)",
		);
		expect(space(-3, 4, -6, -8)).toBe(
			"calc(var(--space-base) * -3) calc(var(--space-base) * 4) calc(var(--space-base) * -6) calc(var(--space-base) * -8)",
		);
	});
});

describe("from", () => {
	it("should exist", () => {
		expect(from).toBeDefined();
	});

	it("should return breakpoint value matching the given key", () => {
		expect(from("xs")).toBe("screen and (min-width: var(--breakpoint-xs))");
		expect(from("sm")).toBe("screen and (min-width: var(--breakpoint-sm))");
		expect(from("md")).toBe("screen and (min-width: var(--breakpoint-md))");
		expect(from("lg")).toBe("screen and (min-width: var(--breakpoint-lg))");
		expect(from("xl")).toBe("screen and (min-width: var(--breakpoint-xl))");
	});

	it("should throw if no value matching the given key is found", () => {
		expect(() => from("whatever" as Breakpoint)).toThrow("");
	});
});

describe("shadow", () => {
	it("should exist", () => {
		expect(shadow).toBeDefined();
	});

	it("should return a box shadow value with the given color", () => {
		expect(shadow(vars.color.background.emphasis)).toBe(
			"var(--boxShadow-base) var(--color-background-emphasis)",
		);
	});
});
