import { gql } from "graphql-request";

export const BASE_TIMELINE_FRAGMENT = gql`
  on timelines {
    code
    dateCreated: date_created
    translations(filter: { language_code: { code: { _eq: $language } } }) {
      name
    }
  }
`;
