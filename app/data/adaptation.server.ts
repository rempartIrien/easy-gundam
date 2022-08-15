import type { Dto } from "./dto";
import type { Series } from "./series.server";
import type {
  DateTimeString,
  ID,
  ImageUrl,
  MarkdownString,
} from "./types.server";

export enum Format {
  TV = "tv",
  TVShort = "tvShort",
  OVA = "ova",
  ONA = "ona",
  Movie = "movie",
}

export interface Adaptation {
  id: ID;
  code: string;
  series: Series;
  parutionDate: DateTimeString;
  episodeNumber: number;
  format: Format;
  name: string;
  description: MarkdownString;
  image: ImageUrl;
}

export type SeriesDto = Dto<Adaptation, "name" | "description">;
