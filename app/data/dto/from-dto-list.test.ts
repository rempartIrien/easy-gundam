/* eslint-disable import/first */

import { describe, expect, it, vi } from "vitest";

vi.mock("./from-dto.server", () => ({
  default: vi.fn((v: unknown) => v),
}));

import { Language } from "../../i18n/i18n.config";
import type { ID, MarkdownString } from "../types.server";

import type { Dto } from "./dto.server";
import fromDtoList from "./from-dto-list.server";
import fromDto from "./from-dto.server";

interface Foo {
  id: ID;
  code: string;
  name: string;
  description: MarkdownString;
}

type FooDto = Dto<Foo, "name" | "description">;

describe("fromDtoList", () => {
  describe("when the input is not an array", () => {
    it("should throw", () => {
      expect(() =>
        fromDtoList(
          { foo: "bar" } as unknown as Record<number, unknown>[],
          Language.French,
        ),
      ).toThrow("This function takes arrays as inputs.");
    });
  });

  describe("when the input is an array", () => {
    it("should return an array", () => {
      expect(Array.isArray(fromDtoList([], Language.French))).toBe(true);
    });

    describe("when the input contains objects", () => {
      it("should return an object without translations property and with properties inlined", () => {
        const input: FooDto[] = [
          {
            id: "42",
            code: "CC",
            translations: {
              fr: { name: "Le nom", description: "_La description_" },
            },
          },
          {
            id: "43",
            code: "CD",
            translations: {
              fr: { name: "Le nom 2", description: "_La description 2_" },
            },
          },
        ];
        fromDtoList(input, Language.French);
        expect(fromDto).toHaveBeenCalledTimes(input.length);
        input.forEach((i) =>
          expect(fromDto).toHaveBeenCalledWith(i, Language.French),
        );
      });
    });
  });
});
