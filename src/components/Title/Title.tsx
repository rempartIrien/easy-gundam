import type { JSX } from "solid-js";

import { titleStyle } from "./Title.css";

export default function Title(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 class={titleStyle} data-foo="bar">
      {props.children}
    </h1>
  );
}
