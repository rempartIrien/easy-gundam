import { describe, expect, it } from "vitest";

import isObject from "./is-object.server";

describe("isObject", () => {
  it("should return booleans", () => {
    expect(typeof isObject()).toBe("boolean");
  });

  it("should return true if the input is an object (not an array)", () => {
    expect(isObject({ foo: "bar" })).toBe(true);
  });

  it("should return true if the input is an empty object (not an array)", () => {
    expect(isObject({})).toBe(true);
  });

  it("should return false if the input is an array", () => {
    expect(isObject(["foo", "bar"])).toBe(false);
  });

  it("should return false if the input is a string", () => {
    expect(isObject("foo")).toBe(false);
  });

  it("should return false if the input is a string", () => {
    expect(isObject(2)).toBe(false);
  });

  it("should return false if there is no input", () => {
    expect(isObject()).toBe(false);
  });

  it("should return false if the input is a boolean", () => {
    expect(isObject(true)).toBe(false);
  });
});
