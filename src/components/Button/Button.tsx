import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import { buttonStyle } from "./Button.css";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export default function Button(props: ButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [local, otherProps] = splitProps(props, ["class", "variant"]);
  return <button class={clsx(buttonStyle, local.class)} {...otherProps} />;
}
