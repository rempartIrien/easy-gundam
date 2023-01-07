import { useContext } from "solid-js";

import { LocaleContext } from "~/contexts/LocaleContext";

export default function useRootPath() {
  const locale = useContext(LocaleContext);
  return locale ? `/${locale}/` : "/";
}
