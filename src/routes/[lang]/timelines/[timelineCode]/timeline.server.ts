import { cache } from "@solidjs/router";

import { getTimelineByCode } from "~/api/timeline.server";
import type { Language } from "~/i18n/i18n.config";

export const getTimeline = cache((code: string, locale: Language) => {
	"use server";
	return getTimelineByCode(code, locale as Language);
}, "timelineLayout");
