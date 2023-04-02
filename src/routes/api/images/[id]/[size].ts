import type { APIEvent } from "solid-start/api";
import invariant from "tiny-invariant";

import { API } from "~/constants.server";
import type { ImageSizeName } from "~/types/ImageSize";
import { imageSizeMap } from "~/types/ImageSize";

export function GET({ params }: APIEvent) {
	invariant(params.id, "Expected params.id");
	invariant(params.size, "Expected params.size");
	const key = validate(params.size)
		? imageSizeMap[params.size]
		: imageSizeMap.medium;
	return fetch(`${API}/assets/${params.id}?key=${key}`);
}

function validate(value: unknown): value is ImageSizeName {
	return !!imageSizeMap[value as ImageSizeName];
}
