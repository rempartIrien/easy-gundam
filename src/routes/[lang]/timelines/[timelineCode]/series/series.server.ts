import { cache } from "@solidjs/router";

import { getSeriesByCode } from "~/api/series.server";
import type { Language } from "~/i18n/i18n.config";

export const getSeries = cache((code: string, locale: Language) => {
	"use server";
	return getSeriesByCode(code, locale as Language);
}, "seriesLayout");
