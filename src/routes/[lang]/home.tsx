import { useI18n } from "@solid-primitives/i18n";

import DocumentTitle from "~/components/DocumentTitle";

import { paragraphStyle, titleStyle } from "./home.css";

export default function Home() {
	const [t] = useI18n();
	return (
		<main>
			<DocumentTitle>{t("home.documentTitle")}</DocumentTitle>
			<h1 class={titleStyle}>{t("home.title")}</h1>
			<p class={paragraphStyle}>{t("home.subtitle")}</p>
		</main>
	);
}
