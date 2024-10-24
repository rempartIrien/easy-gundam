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

	return (
		<Show when={local.items?.length}>
			<nav class="mb-sectionBottom" {...others}>
				<ol class="m-0 flex gap-0.5f p-0">
					<li class="flex items-center gap-0.5f before:hidden [&:not(:nth-last-child(2))]:hidden md:[&:not(:nth-last-child(2))]:flex">
						<Link href={rootPath()}>
							<div class="flex items-center">
								<div class="flex items-center text-base text-primary-main md:hidden">
									<Icon name="chevronLeft" />
								</div>
								{t("navigation.home")}
							</div>
						</Link>
					</li>
					<For each={local.items}>
						{(item) => (
							<li class="flex items-center gap-0.5f before:hidden [&:not(:nth-last-child(2))]:hidden md:[&:not(:nth-last-child(2))]:flex">
								<div class="hidden items-center text-base text-primary-main md:flex">
									<Icon name="chevronRight" />
								</div>
								<Show when={item.href} fallback={<Text>{item.text}</Text>}>
									{(href) => (
										<Link href={href()}>
											<div class="flex items-center">
												<span class="flex items-center text-base text-primary-main md:hidden">
													<Icon name="chevronLeft" />
												</span>
												{item.text}
											</div>
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
