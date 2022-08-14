import type { Language } from "../../i18n/i18n.config";
import type { MarkdownString } from "../types.server";

import type {
  CamelCaseKeyObject,
  SnakeCaseKeyObject,
} from "./string-case.server";

interface Translations<T> {
  translations: Partial<Record<Language, SnakeCaseKeyObject<T>>>;
}

export type Dto<
  T extends CamelCaseKeyObject<T>,
  K extends keyof T,
> = SnakeCaseKeyObject<
  Omit<T, K> & Translations<Record<K, string | MarkdownString>>
>;
