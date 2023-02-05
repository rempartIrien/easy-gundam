import { useI18n } from "@solid-primitives/i18n";
import { Title } from "solid-start";
import { Outlet } from "solid-start";

import CenterContent from "~/components/CenterContent";
import Header from "~/components/Header";

import { headerStyle } from "./[lang].css";

export default function I18nLayout() {
	const [t] = useI18n();

	return (
		<>
			<Title>{t("appName")}</Title>
			<Header class={headerStyle} />
			<CenterContent>
				<Outlet />
			</CenterContent>
		</>
	);
}
