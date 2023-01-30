import { createContext } from "solid-js";

import type { ThemeName } from "~/theme/ThemeName";

export const ThemeContext = createContext<ThemeName | null>();
