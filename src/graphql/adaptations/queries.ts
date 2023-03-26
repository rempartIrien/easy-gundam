import { gql } from "graphql-request";

import {
	BASE_ADAPTATION_FRAGMENT,
	FULL_ADAPTATION_FRAGMENT,
} from "./fragments";

export const LIST_ADAPTATION_QUERY = gql`
	query listAdaptations($seriesCode: String!, $language: String!) {
		adaptations(
			filter: { series: { code: { _eq: $seriesCode } } }
			sort: ["sort", "parution_date"]
		) {
			...adaptationBase
		}
	}
	${BASE_ADAPTATION_FRAGMENT}
`;

export const GET_ADAPTATION_BY_CODE_QUERY = gql`
	query getAdaptationByCode($code: String!, $language: String!) {
		adaptations(limit: 1, filter: { code: { _eq: $code } }) {
			...adaptationFull
		}
	}
	${FULL_ADAPTATION_FRAGMENT}
`;
