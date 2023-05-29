import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import Text from "~/components/Text";
import useTranslation from "~/hooks/useTranslation";

import { paragraphStyle, titleStyle } from "./home.css";

export default function Home() {
	const [t] = useTranslation();
	return (
		<main>
			<DocumentTitle content={t("home.documentTitle")} />
			<Heading variant="title" class={titleStyle}>
				{t("home.title")}
			</Heading>
			<Text class={paragraphStyle}>{t("home.subtitle")}</Text>
		</main>
	);
}
