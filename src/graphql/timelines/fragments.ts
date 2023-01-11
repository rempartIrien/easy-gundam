import { gql } from "graphql-request";

export const BASE_TIMELINE_FRAGMENT = gql`
	fragment timelineBase on timelines {
		code
		dateCreated: date_created
		translations(filter: { language_code: { code: { _eq: $language } } }) {
			name
		}
	}
`;

export const FULL_TIMELINE_FRAGMENT = gql`
	fragment timelineFull on timelines {
		code
		dateCreated: date_created
		image {
			filename_download
			title
		}
		translations(filter: { language_code: { code: { _eq: $language } } }) {
			name
			description
		}
	}
`;
