/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect, it } from "vitest";

import { toCamelCaseKeys } from "./string-case.server";

describe("toCamelCaseKeys", () => {
  describe("when input is a primitive", () => {
    it("should throw an error", () => {
      expect(() =>
        toCamelCaseKeys("foo" as unknown as Record<string, unknown>),
      ).toThrowError("This function takes objects as inputs.");
    });
  });

  describe("when input is an array", () => {
    it("should throw an error", () => {
      expect(() =>
        toCamelCaseKeys([] as unknown as Record<string, unknown>),
      ).toThrowError("This function takes objects as inputs.");
    });
  });

  describe("when input is an object", () => {
    it("should return an object", () => {
      const result = toCamelCaseKeys({ foo: "bar" });
      expect(result).toBeTypeOf("object");
    });

    it("should return the same object if all keys are in camelCase", () => {
      const inputsAndExpectedOuputs = [
        { input: {}, expectedOutput: {} },
        { input: { foo: "bar" }, expectedOutput: { foo: "bar" } },
        {
          input: { foo: "bar", blackCat: "good friend" },
          expectedOutput: { foo: "bar", blackCat: "good friend" },
        },
      ];
      inputsAndExpectedOuputs.forEach(({ input, expectedOutput }) =>
        expect(toCamelCaseKeys(input)).toEqual(expectedOutput),
      );
    });

    it("should trannform keys in snake-case into camelCase", () => {
      const input = { snake_case: "snake-case" };
      const expectedOutput = { snakeCase: "snake-case" };
      const result = toCamelCaseKeys(input);
      expect(result).toEqual(expectedOutput);
    });

    it("should trannform keys in snake-case into camelCase at every level", () => {
      const input = {
        snake_case: "snake-case",
        array: [
          { foo: "bar", look_here: "good!", arr: [{ once_again: "yay" }] },
        ],
        new_array: ["foo", "bar"],
        new_level: {
          first_param: 1,
          second_param: "2",
          third_param: { three_here: null },
        },
      };
      const expectedOutput = {
        snakeCase: "snake-case",
        array: [{ foo: "bar", lookHere: "good!", arr: [{ onceAgain: "yay" }] }],
        newArray: ["foo", "bar"],
        newLevel: {
          firstParam: 1,
          secondParam: "2",
          thirdParam: { threeHere: null },
        },
      };
      const result = toCamelCaseKeys(input);
      expect(result).toEqual(expectedOutput);
    });
  });
});
