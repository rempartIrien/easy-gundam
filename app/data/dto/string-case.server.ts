// From https://stackoverflow.com/a/65642944
// From https://stackoverflow.com/a/65015868

import isObject from "./is-object.server";

type CamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<CamelCase<U>>}`
  : S;

type SnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${SnakeCase<U>}`
  : S;

export type CamelCaseKeyObject<T = Record<string | number, unknown>> = {
  [K in keyof T as CamelCase<string & K>]: T[K] extends Record<string, never>
    ? CamelCaseKeyObject<T[K]>
    : T[K];
};

export type SnakeCaseKeyObject<T = Record<string | number, unknown>> = {
  [K in keyof T as SnakeCase<string & K>]: T[K] extends Record<string, never>
    ? SnakeCaseKeyObject<T[K]>
    : T[K];
};

export function toCamelCaseKeys<T extends SnakeCaseKeyObject>(
  value: T,
): CamelCaseKeyObject<T> {
  if (!isObject(value)) {
    throw new Error("This function takes objects as inputs.");
  }
  return camelCasifyObject(value);
}

function camelCasifyObject<T extends SnakeCaseKeyObject>(
  value: T,
): CamelCaseKeyObject<T> {
  return Object.keys(value).reduce((acc, cur) => {
    const currentValue = value[cur];
    const newValue = camelCasifyEverything(currentValue);
    return {
      ...acc,
      [toCamelCase(cur)]: newValue,
    };
  }, {} as CamelCaseKeyObject<T>);
}

function camelCasifyEverything<T>(value: T[]): T[];
function camelCasifyEverything<T extends SnakeCaseKeyObject>(
  value: T,
): CamelCaseKeyObject;
function camelCasifyEverything<T>(value: T): T;
function camelCasifyEverything(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item: unknown) => camelCasifyEverything(item));
  } else if (isObject(value)) {
    return camelCasifyObject(value);
  } else {
    return value;
  }
}

function toCamelCase<S extends string>(key: SnakeCase<S>): CamelCase<S> {
  return key.replace(/_([a-z])/gi, (all, letter: string) =>
    letter.toUpperCase(),
  ) as CamelCase<S>;
}
