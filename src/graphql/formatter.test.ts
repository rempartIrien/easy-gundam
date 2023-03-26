import { describe, expect, it } from "vitest";

import { format } from "./formatter.server";

interface Output {
	id: string;
	code: string;
	name: string;
	description: string;
}

interface Input {
	id: string;
	code: string;
	translations: {
		name: string;
		description: string;
	}[];
}

describe("format", () => {
	describe("when the input is an object (not an array)", () => {
		it("should return an object", () => {
			expect(typeof format({})).toBe("object");
		});

		describe("when the input has a translations property", () => {
			it("should return an object without translations property and with properties inlined", () => {
				const input: Input = {
					id: "42",
					code: "CC",
					translations: [{ name: "Le nom", description: "_La description_" }],
				};
				const expectedOutput: Output = {
					id: "42",
					code: "CC",
					name: "Le nom",
					description: "_La description_",
				};
				const result = format(input);
				expect(result).toEqual(expectedOutput);
			});
		});

		describe("when the input does not have a translations property", () => {
			it("should return an object with the same properties", () => {
				const input: Omit<Input, "translations"> = {
					id: "42",
					code: "CC",
				};
				const expectedOutput: Omit<Output, "name" | "description"> = {
					id: "42",
					code: "CC",
				};
				const result = format(input);
				expect(result).toEqual(expectedOutput);
			});
		});
	});

	describe("when the input is an array", () => {
		it("should return an array", () => {
			expect(Array.isArray(format([]))).toBe(true);
		});

		it("should format all contained values and objects", () => {
			const input = [
				1,
				"foo",
				false,
				{
					id: "42",
					code: "CC",
				},
				{
					id: "43",
					code: "CD",
					translations: [
						{
							name: "Le nom",
							description: "_La description_",
						},
					],
				},
			];
			const expectedOutput = [
				1,
				"foo",
				false,
				{
					id: "42",
					code: "CC",
				},
				{
					id: "43",
					code: "CD",
					name: "Le nom",
					description: "_La description_",
				},
			];
			const result = format(input);
			expect(result).toEqual(expectedOutput);
		});
	});
});
