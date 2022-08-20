import { gql } from "graphql-request";

import { BASE_TIMELINE_FRAGMENT } from "./fragments";

export const LIST_TIMELINES_QUERY = gql`
  query listTimelines($language: String!) {
    timelines {
      ...${BASE_TIMELINE_FRAGMENT}
    }
  }
`;
