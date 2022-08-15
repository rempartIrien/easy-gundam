import type { MarkdownString } from "../types.server";

import type { Dto } from "./dto.server";
import isObject from "./is-object.server";
import type { CamelCaseKeyObject } from "./string-case.server";
import { toCamelCaseKeys } from "./string-case.server";

export default function fromDto<
  T extends CamelCaseKeyObject<T>,
  K extends keyof T,
>(dto: Partial<Dto<T, K>>): T {
  if (!isObject(dto)) {
    throw new Error("This function takes objects as inputs.");
  }
  const { translations, ...rest } = dto;

  const result = {
    ...rest,
    ...((
      translations as Record<K, string | MarkdownString>[] | undefined
    )?.[0] || {}),
  };

  return toCamelCaseKeys(result) as unknown as T;
}
