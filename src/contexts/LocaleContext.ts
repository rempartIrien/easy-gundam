import { createContext } from "solid-js";

import type { Language } from "~/i18n/i18n.config";

export const LocaleContext = createContext<Language>();
