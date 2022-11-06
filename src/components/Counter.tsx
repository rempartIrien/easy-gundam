import type { JSX } from "solid-js";
import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter(): JSX.Element {
  const [count, setCount] = createSignal(0);
  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
