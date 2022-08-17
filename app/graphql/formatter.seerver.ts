import isObject from "~/utils/is-object.server";

export function format<T>(source: T[]): T[];
export function format<T extends Record<string | number, unknown>>(
  source: T,
): T;
export function format<T>(source: T): T;
export function format(source: unknown): unknown {
  if (Array.isArray(source)) {
    return (source as unknown[]).map((item) => format(item));
  } else if (isObject(source)) {
    return Object.keys(source).reduce((acc, cur) => {
      const currentValue = source[cur];
      if (cur === "translations" && Array.isArray(currentValue)) {
        const inlineProperties = isObject(currentValue?.[0])
          ? format(currentValue[0])
          : {};
        return { ...acc, ...inlineProperties };
      } else {
        return { ...acc, [cur]: format(currentValue) };
      }
    }, {});
  } else {
    return source;
  }
}
