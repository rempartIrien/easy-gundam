import { useI18n } from "@solid-primitives/i18n";
import { HttpStatusCode } from "solid-start/server";

import Heading from "~/components/Heading";
import Link from "~/components/Link";
import useRootPath from "~/hooks/useRootPath";

export default function NotFound() {
	const [t] = useI18n();
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
