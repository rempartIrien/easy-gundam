import { useI18n } from "@solid-primitives/i18n";
import { A } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

import PageContent from "~/components/PageContent";
import useRootPath from "~/hooks/useRootPath";

export default function NotFound() {
	const [t] = useI18n();
	const rootPath = useRootPath();

	return (
		<PageContent title={t("notFound.title")}>
			<HttpStatusCode code={404} />
			<p>
				<A href={rootPath}>{t("notFound.links.backToHome")}</A>
			</p>
		</PageContent>
	);
}
