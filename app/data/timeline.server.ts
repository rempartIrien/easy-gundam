import type { Dto } from "./dto";
import { fromDto } from "./dto";
import { sendRequest } from "./graphql-client.server";
import type { ID, ImageUrl, MarkdownString } from "./types.server";

import type { Language } from "~/i18n/i18n.config";

export interface Timeline {
  id: ID;
  code: string;
  name: string;
  description: MarkdownString;
  image: ImageUrl;
}

export type TimelineDto = Dto<Timeline, "name" | "description">;

export function toTimeline(dto: TimelineDto): Timeline {
  return fromDto(dto);
}

export function listTimelines(
  language: Language,
): Promise<Pick<Timeline, "code" | "name">[]> {
  return sendRequest<{ data: { timelines: TimelineDto[] } }>({
    query: `query listTimelines($language: String!) {
      timelines {
        code
        translations(filter: { language_code: { code: { _eq: $language } } }) {
          name
        }
      }
    }`,
    variables: { language },
  }).then(({ data }) => data.timelines.map((t) => toTimeline(t)));
}
