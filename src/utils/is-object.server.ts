export default function isObject(
	value?: unknown,
): value is Record<string | number, unknown> {
	return !!value && typeof value === "object" && !Array.isArray(value);
}
