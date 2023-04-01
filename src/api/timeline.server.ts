import {
	getTimelineByCode as graphQLGetTimelineByCode,
	listTimelines as graphQLListTimelines,
} from "~/graphql/timeline.server";

import type { Language } from "../i18n/i18n.config";

import convertLinks from "./convertLinks.server";

export async function listTimelines(language: Language) {
	return graphQLListTimelines(language);
}

export async function getTimelineByCode(code: string, language: Language) {
	const timeline = await graphQLGetTimelineByCode(code, language);
	return {
		...timeline,
		description: await convertLinks(timeline.description || "", language),
	};
}
