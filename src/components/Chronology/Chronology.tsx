import clsx from "clsx";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { A } from "solid-start";

import {
  chronologyItemStyle,
  chronologyStyle,
  seriesStyle,
  yearStyle,
} from "./Chronology.css";

interface BaseSeries {
  code: string;
  title: string;
  year: number;
}

interface ChronologyProps extends JSX.OlHTMLAttributes<HTMLOListElement> {
  timelineCode: string;
  items: BaseSeries[] | undefined;
}

export default function Chronology(props: ChronologyProps) {
  const [local, others] = splitProps(props, ["timelineCode", "items", "class"]);

  return (
    <ol {...others} class={clsx(chronologyStyle, local.class)}>
      <For each={local.items}>
        {(item) => (
          <li class={chronologyItemStyle}>
            <div class={yearStyle}>
              {local.timelineCode}&nbsp;{item.year}
            </div>
            <div class={seriesStyle}>
              <A href={`/series/${item.code}`}>{item.title}</A>
            </div>
          </li>
        )}
      </For>
    </ol>
  );
}
