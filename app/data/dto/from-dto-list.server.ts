import type { Dto } from "./dto.server";
import fromDto from "./from-dto.server";
import type { CamelCaseKeyObject } from "./string-case.server";

import type { Language } from "~/i18n/i18n.config";

export default function fromDtoList<
  T extends CamelCaseKeyObject<T>,
  K extends keyof T,
>(dtoList: Partial<Dto<T, K>>[], language: Language): Partial<T>[] {
  if (!Array.isArray(dtoList)) {
    throw new Error("This function takes arrays as inputs.");
  } else {
    return dtoList.map((dto) => fromDto(dto, language));
  }
}
