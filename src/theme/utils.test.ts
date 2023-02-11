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
import { fixedSpace, from, hexToRgba, relativeSpace } from "./utils";

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

describe("hexToRgba", () => {
	it("should exist", () => {
		expect(hexToRgba).toBeDefined();
	});

	it("should return a rgba string matching the given hex color with 6 characters", () => {
		expect(hexToRgba("#ffffff")).toBe("rgba(255, 255, 255, 1)");
		expect(hexToRgba("#fcae1e")).toBe("rgba(252, 174, 30, 1)");
		expect(hexToRgba("#ed2939")).toBe("rgba(237, 41, 57, 1)");
		expect(hexToRgba("#0492c2")).toBe("rgba(4, 146, 194, 1)");
	});

	it("should return a rgba string matching the given hex color with 3 characters", () => {
		expect(hexToRgba("#fff")).toBe("rgba(255, 255, 255, 1)");
		expect(hexToRgba("#fb2")).toBe("rgba(255, 187, 34, 1)");
		expect(hexToRgba("#e34")).toBe("rgba(238, 51, 68, 1)");
		expect(hexToRgba("#09C")).toBe("rgba(0, 153, 204, 1)");
	});

	it("should be case-insensitive", () => {
		expect(hexToRgba("#ffffff")).toBe("rgba(255, 255, 255, 1)");
		expect(hexToRgba("#FFFFFF")).toBe("rgba(255, 255, 255, 1)");
		expect(hexToRgba("#FFffFF")).toBe("rgba(255, 255, 255, 1)");
		expect(hexToRgba("#fFfFfF")).toBe("rgba(255, 255, 255, 1)");
		expect(hexToRgba("#FCae1e")).toBe("rgba(252, 174, 30, 1)");
		expect(hexToRgba("#eD2939")).toBe("rgba(237, 41, 57, 1)");
		expect(hexToRgba("#0492C2")).toBe("rgba(4, 146, 194, 1)");
	});

	it("should throw if the given color is not well formed", () => {
		expect(() => hexToRgba("ffffff" as unknown as "#ffffff")).toThrowError(
			"Cannot convert 'ffffff' to decimal RGB color.",
		);
		expect(() => hexToRgba("#fffff")).toThrowError(
			"Cannot convert '#fffff' to decimal RGB color.",
		);
		expect(() => hexToRgba("#ffffffff")).toThrowError(
			"Cannot convert '#ffffffff' to decimal RGB color.",
		);
		expect(() => hexToRgba("whatever" as unknown as "#ffffff")).toThrowError(
			"Cannot convert 'whatever' to decimal RGB color.",
		);
		expect(() => hexToRgba(null as unknown as "#ffffff")).toThrowError(
			"Cannot convert 'null' to decimal RGB color.",
		);
		expect(() => hexToRgba(undefined as unknown as "#ffffff")).toThrowError(
			"Cannot convert 'undefined' to decimal RGB color.",
		);
	});

	it("should return a rgba string matching the given alpha", () => {
		expect(hexToRgba("#ffffff", 0)).toBe("rgba(255, 255, 255, 0)");
		expect(hexToRgba("#ffffff", 0.1111)).toBe("rgba(255, 255, 255, 0.1111)");
		expect(hexToRgba("#ffffff", 1)).toBe("rgba(255, 255, 255, 1)");
		expect(hexToRgba("#ffffff", 0.5)).toBe("rgba(255, 255, 255, 0.5)");
		expect(hexToRgba("#ffffff", 0.87)).toBe("rgba(255, 255, 255, 0.87)");
		expect(hexToRgba("#fcae1e", 0)).toBe("rgba(252, 174, 30, 0)");
		expect(hexToRgba("#fcae1e", 0.1111)).toBe("rgba(252, 174, 30, 0.1111)");
		expect(hexToRgba("#fcae1e", 1)).toBe("rgba(252, 174, 30, 1)");
		expect(hexToRgba("#fcae1e", 0.5)).toBe("rgba(252, 174, 30, 0.5)");
		expect(hexToRgba("#fcae1e", 0.87)).toBe("rgba(252, 174, 30, 0.87)");
	});

	it("should throw if the alpa is not between 0 and 1", () => {
		expect(() => hexToRgba("#ffffff", -1)).toThrowError(
			"Cannot use alpha value '-1'. It should be a number between 0 and 1.",
		);
		expect(() => hexToRgba("#ffffff", 42)).toThrowError(
			"Cannot use alpha value '42'. It should be a number between 0 and 1.",
		);
		expect(() => hexToRgba("#ffffff", "0.1" as unknown as number)).toThrowError(
			"Cannot use alpha value '0.1'. It should be a number between 0 and 1.",
		);
	});
});
