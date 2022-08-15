import { describe, expect, it } from "vitest";

import type { ID, MarkdownString } from "../types.server";

import type { Dto } from "./dto.server";
import fromDto from "./from-dto.server";

interface Foo {
  id: ID;
  code: string;
  name: string;
  description: MarkdownString;
}

type FooDto = Dto<Foo, "name" | "description">;

describe("fromDto", () => {
  describe("when the input is not an object (not an array)", () => {
    it("should throw", () => {
      expect(() =>
        fromDto(["foo", "bar"] as unknown as Record<number, string>),
      ).toThrow("This function takes objects as inputs.");
    });
  });

  describe("when the input is an object (not an array)", () => {
    it("should return an object", () => {
      expect(typeof fromDto({})).toBe("object");
    });

    describe("when the input has a translations property", () => {
      it("should return an object without translations property and with properties inlined", () => {
        const input: FooDto = {
          id: "42",
          code: "CC",
          translations: [{ name: "Le nom", description: "_La description_" }],
        };
        const expectedOutput: Foo = {
          id: "42",
          code: "CC",
          name: "Le nom",
          description: "_La description_",
        };
        const result = fromDto(input);
        expect(result).toEqual(expectedOutput);
      });
    });

    describe("when the input does not have a translations property", () => {
      it("should return an object with the same properties", () => {
        const input: Omit<FooDto, "translations"> = {
          id: "42",
          code: "CC",
        };
        const expectedOutput: Omit<Foo, "name" | "description"> = {
          id: "42",
          code: "CC",
        };
        const result = fromDto<Foo, "name" | "description">(input);
        expect(result).toEqual(expectedOutput);
      });
    });
  });
});
