import type { Accessor } from "solid-js";
import { createContext, createSignal } from "solid-js";

import type { Language } from "~/i18n/i18n.config";

// Use a dummy default value.
const [dummy, setDummy] = createSignal<Language | undefined>();

export const LocaleContext = createContext<
	[Accessor<Language | undefined>, (lang: Language | undefined) => void]
>([dummy, setDummy]);
