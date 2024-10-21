import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { For, Show } from "solid-js";

import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";

export interface BreadcrumbItem {
	text?: string;
	href?: string;
}

type BreadcrumbProps = Omit<JSX.IntrinsicElements["nav"], "class"> & {
	items?: BreadcrumbItem[];
};

export default function Breadcrumb(props: BreadcrumbProps) {
	const t = useTranslation();
	const [local, others] = splitProps(props, ["items"]);
	const rootPath = useRootPath();

	const chevronStyle = "w-2.5f h-2.5f text-primary-main";

	return (
		<Show when={local.items?.length}>
			<nav class="mb-sectionBottom" {...others}>
				<ol class="m-0 flex gap-0.5f p-0">
					<li class="flex items-center gap-0.5f before:hidden [&:not(:nth-last-child(2))]:hidden md:[&:not(:nth-last-child(2))]:flex">
						<Link class="!flex items-center" href={rootPath()}>
							<Icon
								class={`${chevronStyle} block md:hidden`}
								name="chevronLeft"
							/>
							{t("navigation.home")}
						</Link>
					</li>
					<For each={local.items}>
						{(item) => (
							<li class="flex items-center gap-0.5f before:hidden [&:not(:nth-last-child(2))]:hidden md:[&:not(:nth-last-child(2))]:flex">
								<Icon
									class={`${chevronStyle} hidden md:block`}
									name="chevronRight"
								/>
								<Show when={item.href} fallback={<Text>{item.text}</Text>}>
									{(href) => (
										<Link class="!flex items-center" href={href()}>
											<Icon
												class={`${chevronStyle} block md:hidden`}
												name="chevronLeft"
											/>
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
