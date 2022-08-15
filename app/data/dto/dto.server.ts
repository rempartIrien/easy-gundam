import type { MarkdownString } from "../types.server";

import type {
  CamelCaseKeyObject,
  SnakeCaseKeyObject,
} from "./string-case.server";

interface Translations<T> {
  translations: Partial<T>[];
}

export type Dto<
  T extends CamelCaseKeyObject<T>,
  K extends keyof Partial<T>,
> = SnakeCaseKeyObject<
  Omit<Omit<T, "translations">, K> &
    Translations<Record<K, string | MarkdownString>>
>;
