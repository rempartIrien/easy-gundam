import {
  StartServer,
  createHandler,
  renderAsync,
} from "solid-start/entry-server";

import { LocaleProvider } from "./contexts/LocaleContext";

export default createHandler(
  renderAsync((event) => (
    <LocaleProvider>
      <StartServer event={event} />
    </LocaleProvider>
  )),
);
