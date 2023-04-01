import { gql } from "graphql-request";

import {
	BASE_SERIES_FRAGMENT,
	FULL_SERIES_FRAGMENT,
	LINK_SERIES_FRAGMENT,
} from "./fragments";

export const LIST_SERIES_QUERY = gql`
	query listSeries($timelineCode: String!, $language: String!) {
		series(
			filter: { timeline: { code: { _eq: $timelineCode } } }
			sort: ["sort", "year"]
		) {
			...seriesBase
		}
	}
	${BASE_SERIES_FRAGMENT}
`;

export const GET_SERIES_BY_CODE_QUERY = gql`
	query getSeriesByCode($code: String!, $language: String!) {
		series(limit: 1, filter: { code: { _eq: $code } }) {
			...seriesFull
		}
	}
	${FULL_SERIES_FRAGMENT}
`;

export const GET_MULTI_SERIES_BY_CODES_QUERY = gql`
	query getMultiSeriesByCodes($codes: [String]!, $language: String!) {
		series(filter: { code: { _in: $codes } }) {
			...seriesLink
		}
	}
	${LINK_SERIES_FRAGMENT}
`;
