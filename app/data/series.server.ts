import type { Dto } from "./dto";
import type { Timeline } from "./timeline.server";
import type { ID, ImageUrl, MarkdownString } from "./types.server";

export interface Series {
  id: ID;
  code: string;
  timeline: Timeline;
  name: string;
  description: MarkdownString;
  image: ImageUrl;
}

export type SeriesDto = Dto<Series, "name" | "description">;
