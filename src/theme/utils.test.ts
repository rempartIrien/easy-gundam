import { describe, expect, it, vi } from "vitest";

vi.mock("./theme.css", () => ({
	vars: {
		space: { base: "42px" },
		breakpoint: {
			xs: "320px",
			sm: "481px",
			md: "769px",
			lg: "1025px",
			xl: "1201px",
		},
	},
}));

import type { Breakpoint } from "./theme.css";
import { from, space } from "./utils";

describe("space", () => {
	it("should exist", () => {
		expect(space).toBeDefined();
	});

	it("should convert one value", () => {
		expect(space(1)).toBe("calc(42px * 1)");
		expect(space(3)).toBe("calc(42px * 3)");
		expect(space(-3)).toBe("calc(42px * -3)");
	});

	it("should convert two values", () => {
		expect(space(1, 2)).toBe("calc(42px * 1) calc(42px * 2)");
		expect(space(3, 4)).toBe("calc(42px * 3) calc(42px * 4)");
		expect(space(-3, 4)).toBe("calc(42px * -3) calc(42px * 4)");
	});

	it("should convert three values", () => {
		expect(space(1, 2, 5)).toBe("calc(42px * 1) calc(42px * 2) calc(42px * 5)");
		expect(space(3, 4, 6)).toBe("calc(42px * 3) calc(42px * 4) calc(42px * 6)");
		expect(space(-3, 4, -6)).toBe(
			"calc(42px * -3) calc(42px * 4) calc(42px * -6)",
		);
	});

	it("should convert four values", () => {
		expect(space(1, 2, 5, 7)).toBe(
			"calc(42px * 1) calc(42px * 2) calc(42px * 5) calc(42px * 7)",
		);
		expect(space(3, 4, 6, -8)).toBe(
			"calc(42px * 3) calc(42px * 4) calc(42px * 6) calc(42px * -8)",
		);
		expect(space(-3, 4, -6, -8)).toBe(
			"calc(42px * -3) calc(42px * 4) calc(42px * -6) calc(42px * -8)",
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
