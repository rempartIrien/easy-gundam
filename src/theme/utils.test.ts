import { describe, expect, it, vi } from "vitest";

vi.mock("./theme.css", () => ({
	vars: {
		color: {
			background: {
				main: "var(--color-background-main)",
				emphasis: "var(--color-background-emphasis)",
			},
		},
		space: { fixed: "var(--space-fixed)", relative: "var(--space-relative)" },
		boxShadow: { base: "var(--boxShadow-base)" },
	},
	breakpoints: {
		xs: "320px",
		sm: "481px",
		md: "769px",
		lg: "1025px",
		xl: "1201px",
	},
}));

import type { Breakpoint } from "./theme.css";
import { vars } from "./theme.css";
import { fixedSpace, from, relativeSpace, shadow } from "./utils";

describe("fixedSpace", () => {
	it("should exist", () => {
		expect(fixedSpace).toBeDefined();
	});

	it("should convert one value", () => {
		expect(fixedSpace(1)).toBe("calc(var(--space-fixed) * 1)");
		expect(fixedSpace(3)).toBe("calc(var(--space-fixed) * 3)");
		expect(fixedSpace(-3)).toBe("calc(var(--space-fixed) * -3)");
	});

	it("should convert two values", () => {
		expect(fixedSpace(1, 2)).toBe(
			"calc(var(--space-fixed) * 1) calc(var(--space-fixed) * 2)",
		);
		expect(fixedSpace(3, 4)).toBe(
			"calc(var(--space-fixed) * 3) calc(var(--space-fixed) * 4)",
		);
		expect(fixedSpace(-3, 4)).toBe(
			"calc(var(--space-fixed) * -3) calc(var(--space-fixed) * 4)",
		);
	});

	it("should convert three values", () => {
		expect(fixedSpace(1, 2, 5)).toBe(
			"calc(var(--space-fixed) * 1) calc(var(--space-fixed) * 2) calc(var(--space-fixed) * 5)",
		);
		expect(fixedSpace(3, 4, 6)).toBe(
			"calc(var(--space-fixed) * 3) calc(var(--space-fixed) * 4) calc(var(--space-fixed) * 6)",
		);
		expect(fixedSpace(-3, 4, -6)).toBe(
			"calc(var(--space-fixed) * -3) calc(var(--space-fixed) * 4) calc(var(--space-fixed) * -6)",
		);
	});

	it("should convert four values", () => {
		expect(fixedSpace(1, 2, 5, 7)).toBe(
			"calc(var(--space-fixed) * 1) calc(var(--space-fixed) * 2) calc(var(--space-fixed) * 5) calc(var(--space-fixed) * 7)",
		);
		expect(fixedSpace(3, 4, 6, -8)).toBe(
			"calc(var(--space-fixed) * 3) calc(var(--space-fixed) * 4) calc(var(--space-fixed) * 6) calc(var(--space-fixed) * -8)",
		);
		expect(fixedSpace(-3, 4, -6, -8)).toBe(
			"calc(var(--space-fixed) * -3) calc(var(--space-fixed) * 4) calc(var(--space-fixed) * -6) calc(var(--space-fixed) * -8)",
		);
	});
});

describe("relativeSpace", () => {
	it("should exist", () => {
		expect(relativeSpace).toBeDefined();
	});

	it("should convert one value", () => {
		expect(relativeSpace(1)).toBe("calc(var(--space-relative) * 1)");
		expect(relativeSpace(3)).toBe("calc(var(--space-relative) * 3)");
		expect(relativeSpace(-3)).toBe("calc(var(--space-relative) * -3)");
	});

	it("should convert two values", () => {
		expect(relativeSpace(1, 2)).toBe(
			"calc(var(--space-relative) * 1) calc(var(--space-relative) * 2)",
		);
		expect(relativeSpace(3, 4)).toBe(
			"calc(var(--space-relative) * 3) calc(var(--space-relative) * 4)",
		);
		expect(relativeSpace(-3, 4)).toBe(
			"calc(var(--space-relative) * -3) calc(var(--space-relative) * 4)",
		);
	});

	it("should convert three values", () => {
		expect(relativeSpace(1, 2, 5)).toBe(
			"calc(var(--space-relative) * 1) calc(var(--space-relative) * 2) calc(var(--space-relative) * 5)",
		);
		expect(relativeSpace(3, 4, 6)).toBe(
			"calc(var(--space-relative) * 3) calc(var(--space-relative) * 4) calc(var(--space-relative) * 6)",
		);
		expect(relativeSpace(-3, 4, -6)).toBe(
			"calc(var(--space-relative) * -3) calc(var(--space-relative) * 4) calc(var(--space-relative) * -6)",
		);
	});

	it("should convert four values", () => {
		expect(relativeSpace(1, 2, 5, 7)).toBe(
			"calc(var(--space-relative) * 1) calc(var(--space-relative) * 2) calc(var(--space-relative) * 5) calc(var(--space-relative) * 7)",
		);
		expect(relativeSpace(3, 4, 6, -8)).toBe(
			"calc(var(--space-relative) * 3) calc(var(--space-relative) * 4) calc(var(--space-relative) * 6) calc(var(--space-relative) * -8)",
		);
		expect(relativeSpace(-3, 4, -6, -8)).toBe(
			"calc(var(--space-relative) * -3) calc(var(--space-relative) * 4) calc(var(--space-relative) * -6) calc(var(--space-relative) * -8)",
		);
	});
});

describe("from", () => {
	it("should exist", () => {
		expect(from).toBeDefined();
	});

	it("should return breakpoint value matching the given key", () => {
		expect(from("xs")).toBe("screen and (min-width: 320px)");
		expect(from("sm")).toBe("screen and (min-width: 481px)");
		expect(from("md")).toBe("screen and (min-width: 769px)");
		expect(from("lg")).toBe("screen and (min-width: 1025px)");
		expect(from("xl")).toBe("screen and (min-width: 1201px)");
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
