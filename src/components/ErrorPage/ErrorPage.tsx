import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

import Link from "../Link";

export default function ErrorPage() {
	const [t] = useTranslation();
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
