import { useI18n } from "@solid-primitives/i18n";
import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { For, Show } from "solid-js";

import useRootPath from "~/hooks/useRootPath";

import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";

import {
	breadcrumbStyle,
	chevronLeftStyle,
	chevronRightStyle,
	linkStyle,
	listItemStyle,
	listStyle,
} from "./Breadcrumb.css";

export interface BreadcrumbItem {
	text: string;
	href?: string;
}

type BreadcrumbProps = JSX.IntrinsicElements["nav"] & {
	items?: BreadcrumbItem[];
};

export default function Breadcrumb(props: BreadcrumbProps) {
	const [t] = useI18n();
	const [local, others] = splitProps(props, ["class", "items"]);
	const rootPath = useRootPath();

	return (
		<Show when={local.items?.length}>
			<nav class={clsx([breadcrumbStyle, local.class])} {...others}>
				<ol class={listStyle}>
					<li class={listItemStyle}>
						<Link href={rootPath()}>
							<Icon class={chevronLeftStyle} name="chevronLeft" />
							{t("navigation.home")}
						</Link>
					</li>
					<For each={local.items}>
						{(item) => (
							<li class={listItemStyle}>
								<Icon class={chevronRightStyle} name="chevronRight" />
								<Show when={item.href} fallback={<Text>{item.text}</Text>}>
									{(href) => (
										<Link class={linkStyle} href={href()}>
											<Icon class={chevronLeftStyle} name="chevronLeft" />
											{item.text}
										</Link>
									)}
								</Show>
							</li>
						)}
					</For>
				</ol>
			</nav>
		</Show>
	);
}
