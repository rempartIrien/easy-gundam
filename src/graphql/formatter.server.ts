import isObject from "../utils/is-object.server";

export type InlineTranslatedPropertyObject<T> = T extends (infer U)[]
	? InlineTranslatedPropertyObject<U>[]
	: T extends {
			translations?: null | undefined | (null | infer U)[];
	  }
	? (U extends Record<string, unknown>
			? InlineTranslatedPropertyObject<U>
			: never) &
			Omit<
				{ [K in keyof T]: InlineTranslatedPropertyObject<T[K]> },
				"translations"
			>
	: T;

export function format<T extends unknown[]>(
	source: T,
): InlineTranslatedPropertyObject<T[number]>[];
export function format<T>(source: T): InlineTranslatedPropertyObject<T>;
export function format(
	source: unknown,
): InlineTranslatedPropertyObject<unknown> {
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
