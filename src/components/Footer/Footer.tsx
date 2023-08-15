import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Show } from "solid-js";

import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

import CenterContent from "../CenterContent";
import Link from "../Link";
import Logo from "../Logo";

import {
	containerStyle,
	copyrightStyle,
	footerStyle,
	linkListStyle,
	logoContainerStyle,
	logoStyle,
} from "./Footer.css";

type FooterProps = Omit<JSX.IntrinsicElements["footer"], "children">;

export default function Footer(props: FooterProps) {
	const [local, others] = splitProps(props, ["class"]);
	const [t] = useTranslation();
	const rootPath = useRootPath();
	const appName = t("appName");
	const year = new Date().getFullYear();
	const firstYear = 2023;

	return (
		<footer class={clsx([footerStyle, local.class])} {...others}>
			<div class={logoContainerStyle}>
				<Logo class={logoStyle} variant="text" />
			</div>
			<CenterContent class={containerStyle}>
				<ul class={linkListStyle}>
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
				<div class={copyrightStyle}>
					<div>
						© {firstYear}
						<Show when={year !== firstYear}>-{year}</Show> {appName}
					</div>
					<div>{t("footer.copyrights.gundam", { appName })}</div>
					<div>{t("footer.copyrights.site", { appName })}</div>
				</div>
			</CenterContent>
		</footer>
	);
}
