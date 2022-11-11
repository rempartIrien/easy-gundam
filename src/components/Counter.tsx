import type { JSX } from "solid-js";
import { createSignal } from "solid-js";

import Button from "./Button";

export default function Counter(): JSX.Element {
  const [count, setCount] = createSignal(0);
  return (
    <Button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </Button>
  );
}
