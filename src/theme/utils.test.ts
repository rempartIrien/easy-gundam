import { describe, expect, it, vi } from "vitest";

vi.mock("./theme.css", () => ({
	vars: { space: { base: "42px" } },
}));

import { space } from "./utils";

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
