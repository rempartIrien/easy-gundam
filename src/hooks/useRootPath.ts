import { createMemo, useContext } from "solid-js";

import { LocaleContext } from "~/contexts/LocaleContext";
import type { Language } from "~/i18n/i18n.config";

export default function useRootPath() {
	const [locale] = useContext(LocaleContext);
	const rootPath = createMemo(() =>
		locale() ? `/${locale() as Language}/` : "/",
	);
	return rootPath;
}
