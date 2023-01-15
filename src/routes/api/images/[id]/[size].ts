import type { APIEvent } from "solid-start/api";
import invariant from "tiny-invariant";

import { API } from "~/constants.server";

const sizeMap = {
	extraSmall: "100",
	small: "200",
	medium: "400",
	large: "800",
} as const;

type SizeName = keyof typeof sizeMap;

export function GET({ params }: APIEvent) {
	invariant(params.id, "Expected params.id");
	invariant(params.size, "Expected params.size");
	const key = validate(params.size) ? sizeMap[params.size] : sizeMap.medium;
	return fetch(`${API}/assets/${params.id}?key=${key}`);
}

function validate(value: unknown): value is SizeName {
	return !!sizeMap[value as SizeName];
}
