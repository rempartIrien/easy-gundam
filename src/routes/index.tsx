import { A } from "solid-start";

import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
  return (
    <>
      <nav>
        <A href="/timelines">Timelines</A>
        <A href="/about">About</A>
      </nav>
      <main>
        <h1>Welcome to Easy Gundam!</h1>
        <Counter />
      </main>
    </>
  );
}
