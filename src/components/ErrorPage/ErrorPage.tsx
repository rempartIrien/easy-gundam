import { useI18n } from "@solid-primitives/i18n";
import { A } from "solid-start";

import useRootPath from "~/hooks/useRootPath";

export default function ErrorPage() {
	const [t] = useI18n();
	const rootPath = useRootPath();

	// TODO: HttpStatus according to kind of error (make two Error classes)
	return (
		<main>
			<h1>{t("error.title")}</h1>
			<p>
				<A href={rootPath}>{t("error.links.backToHome")}</A>
			</p>
		</main>
	);
}
