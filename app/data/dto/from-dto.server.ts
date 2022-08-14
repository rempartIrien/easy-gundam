import type { Language } from "../../i18n/i18n.config";

import type { Dto } from "./dto.server";
import isObject from "./is-object.server";
import type { CamelCaseKeyObject } from "./string-case.server";
import { toCamelCaseKeys } from "./string-case.server";

export default function fromDto<
  T extends CamelCaseKeyObject<T>,
  K extends keyof T,
>(dto: Partial<Dto<T, K>>, language: Language): Partial<T> {
  if (!isObject(dto)) {
    throw new Error("This function takes objects as inputs.");
  }
  const translations = dto?.translations?.[language] ?? {};

  const result = Object.entries(dto).reduce((acc, [key, value]) => {
    if (key === "translations") {
      return acc;
    } else {
      return { ...acc, [key]: value };
    }
  }, translations);

  return toCamelCaseKeys(result) as unknown as T;
}
