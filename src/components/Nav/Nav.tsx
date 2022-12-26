import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { navStyle } from "./Nav.css";

type NavProps = JSX.ButtonHTMLAttributes<HTMLElement>;

export default function Nav(props: NavProps) {
  const [local, others] = splitProps(props, ["children", "class"]);

  return (
    <nav {...others} class={clsx(navStyle, local.class)}>
      {local.children}
    </nav>
  );
}
