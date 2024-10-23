import type { JSX } from "solid-js";
import { Show } from "solid-js";

import useAppName from "~/hooks/useAppName";
import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

import CenterContent from "../CenterContent";
import Link from "../Link";
import Logo from "../Logo";

type FooterProps = Omit<JSX.IntrinsicElements["footer"], "children" | "class">;

export default function Footer(props: FooterProps) {
	const t = useTranslation();
	const rootPath = useRootPath();
	const appName = useAppName();
	const year = new Date().getFullYear();
	const firstYear = 2023;

	return (
		<footer
			class="relative mt-4r py-4r before:absolute before:left-1/2 before:top-[calc(calc(2px-2rem)/2)] before:block before:h-[2px] before:w-[calc(theme(width.min-100-xl)-calc(theme(spacing.2f)*2))] before:-translate-x-1/2 before:bg-primary-background before:content-[''] md:before:w-[calc(theme(width.min-100-xl)-calc(theme(spacing.2f)*3))]"
			{...props}
		>
			<div class="mx-auto mb-4r flex w-37.5f items-center justify-center">
				<Logo variant="text" />
			</div>
			<CenterContent>
				<div class="flex flex-col gap-4f lg:flex-row-reverse lg:items-start lg:justify-between lg:gap-4r">
					<ul class="m-0 flex list-none flex-row justify-center gap-4f p-0 lg:flex-col lg:content-start lg:gap-1r">
						<li>
							<Link href={`${rootPath()}about`}>{t("footer.links.about")}</Link>
						</li>
						<li>
							<Link href={`${rootPath()}cookies`}>
								{t("footer.links.cookies")}
							</Link>
						</li>
						<li>
							<Link href="https://twitter.com/RempartIrien">
								{t("footer.links.contact")}
							</Link>
						</li>
					</ul>
					<div class="font-sans text-sm">
						<div>
							© {firstYear}
							<Show when={year !== firstYear}>-{year}</Show> {appName}
						</div>
						<div>{t("footer.copyrights.gundam", { appName })}</div>
						<div>{t("footer.copyrights.site", { appName })}</div>
					</div>
				</div>
			</CenterContent>
		</footer>
	);
}
