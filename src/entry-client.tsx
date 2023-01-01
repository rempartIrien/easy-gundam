import { StartClient, mount } from "solid-start/entry-client";

import { LocaleProvider } from "./contexts/LocaleContext";

mount(
  () => (
    <LocaleProvider>
      <StartClient />
    </LocaleProvider>
  ),
  document,
);
