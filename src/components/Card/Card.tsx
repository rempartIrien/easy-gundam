import type { ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

type CardProps<T extends ValidComponent = "div"> = {
	component?: T;
} & ComponentProps<T> &
	Omit<JSX.HTMLAttributes<HTMLElement>, "class">;

export default function Card<T extends ValidComponent = "div">(
	props: CardProps<T>,
) {
	const [local, otherProps] = splitProps(props, ["component", "children"]);

	return (
		<Dynamic
			component={local.component || "div"}
			class="glass-effect round p-2f"
			{...otherProps}
		>
			{local.children}
		</Dynamic>
	);
}
