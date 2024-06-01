import type { Params } from "@solidjs/router";
import { createAsync, useParams } from "@solidjs/router";
import type { Accessor } from "solid-js";

export default function useLocalizedRouteData<T>(
	loadFunction: (params: Params) => Promise<T>,
): Accessor<T | undefined> {
	const params = useParams();
	// Spread params to trigger reactivity
	return createAsync(() => loadFunction({ ...params }));
}
