import type { Accessor } from "solid-js";
import { createSignal } from "solid-js";
import { createContext } from "solid-js";

import type { ThemeName } from "~/theme/ThemeName";

// Use a dummy default value.
const [dummy, setDummy] = createSignal<ThemeName | null | undefined>();

export const ThemeContext = createContext<
	[
		Accessor<ThemeName | null | undefined>,
		(theme: ThemeName | null | undefined) => void,
	]
>([dummy, setDummy]);
