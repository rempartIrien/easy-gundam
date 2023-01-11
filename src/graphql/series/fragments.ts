import { gql } from "graphql-request";

export const BASE_SERIES_FRAGMENT = gql`
	fragment seriesBase on series {
		code
		year
		dateCreated: date_created
		translations(filter: { language_code: { code: { _eq: $language } } }) {
			title
		}
	}
`;

export const FULL_SERIES_FRAGMENT = gql`
	fragment seriesBase on series {
		code
		year
		dateCreated: date_created
		timeline {
			code
		}
		translations(filter: { language_code: { code: { _eq: $language } } }) {
			title
		}
	}
`;
