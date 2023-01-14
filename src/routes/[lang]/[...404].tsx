import { useI18n } from "@solid-primitives/i18n";
import { A } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

import Heading from "~/components/Heading";
import useRootPath from "~/hooks/useRootPath";

export default function NotFound() {
	const [t] = useI18n();
	const rootPath = useRootPath();

	return (
		<main>
			<HttpStatusCode code={404} />
			<Heading>{t("notFound.title")}</Heading>
			<p>
				<A href={rootPath}>{t("notFound.links.backToHome")}</A>
			</p>
		</main>
	);
}
