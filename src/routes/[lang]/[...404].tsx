import { HttpStatusCode } from "@solidjs/start";

import Heading from "~/components/Heading";
import Link from "~/components/Link";
import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

export default function NotFound() {
	const t = useTranslation();
	const rootPath = useRootPath();

	return (
		<>
			<HttpStatusCode code={404} />
			<Heading variant="title">{t("notFound.title")}</Heading>
			<p>
				<Link href={rootPath()}>{t("notFound.links.backToHome")}</Link>
			</p>
		</>
	);
}
