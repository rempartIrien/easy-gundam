import type { Signal } from "solid-js";
import { createSignal } from "solid-js";
import { createContext } from "solid-js";

import type { ThemeName } from "~/theme/ThemeName";

// Use a dummy default value.
const [dummy, setDummy] = createSignal<ThemeName | null | undefined>();

export const ThemeContext = createContext<Signal<ThemeName | null | undefined>>(
	[dummy, setDummy],
);
