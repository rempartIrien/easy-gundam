import { useI18n } from "@solid-primitives/i18n";

import useRootPath from "~/hooks/useRootPath";

import Link from "../Link";

export default function ErrorPage() {
	const [t] = useI18n();
	const rootPath = useRootPath();

	// TODO: HttpStatus according to kind of error (make two Error classes)
	return (
		<main>
			<h1>{t("error.title")}</h1>
			<p>
				<Link href={rootPath()}>{t("error.links.backToHome")}</Link>
			</p>
		</main>
	);
}
