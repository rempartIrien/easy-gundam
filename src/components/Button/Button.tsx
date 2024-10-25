import type { JSX } from "solid-js";

export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "class">;

export default function Button(props: ButtonProps) {
	return <button class="glass-effect cursor-pointer" {...props} />;
}
