import { html } from "property-information";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import type { Component } from "solid-js";
import { children, createMemo, mergeProps } from "solid-js";
import type { PluggableList } from "unified";
import { unified } from "unified";
import { VFile } from "vfile";

import type { Options as TransformOptions } from "./ast-to-solid";
import { childrenToSolid } from "./ast-to-solid";
import type { Options as FilterOptions } from "./rehype-filter";
import rehypeFilter from "./rehype-filter";

interface CoreOptions {
	children: string;
}
interface PluginOptions {
	remarkPlugins: PluggableList;
	rehypePlugins: PluggableList;
}
interface LayoutOptions {
	class: string;
}

type SolidMarkdownOptions = CoreOptions &
	PluginOptions &
	LayoutOptions &
	FilterOptions &
	TransformOptions;

const defaults: SolidMarkdownOptions = {
	remarkPlugins: [],
	rehypePlugins: [],
	class: "",
	unwrapDisallowed: false,
	disallowedElements: undefined,
	allowedElements: undefined,
	allowElement: undefined,
	children: "",
	sourcePos: false,
	rawSourcePos: false,
	skipHtml: false,
	includeElementIndex: false,
	transformLinkUri: null,
	transformImageUri: undefined,
	linkTarget: "_self",
	components: {},
};

const SolidMarkdown: Component<Partial<SolidMarkdownOptions>> = (opts) => {
	const options: SolidMarkdownOptions = mergeProps(defaults, opts);
	const c = children(() => options.children);

	const hastNode = createMemo(() => {
		const processor = unified()
			.use(remarkParse)
			.use(options.remarkPlugins || [])
			.use(remarkRehype, { allowDangerousHtml: true })
			.use(options.rehypePlugins || [])
			.use(rehypeFilter, options);

		const file = new VFile();

		if (typeof c() === "string") {
			file.value = c() as string;
		} else if (c() !== undefined && options.children !== null) {
			// eslint-disable-next-line no-console
			console.warn(
				`[solid-markdown] Warning: please pass a string as \`children\` (not: \`${String(
					c(),
				)}\`)`,
			);
		}

		const hastNode = processor.runSync(processor.parse(file), file);

		if (hastNode.type !== "root") {
			throw new TypeError("Expected a `root` node");
		}

		return hastNode;
	});

	return (
		<div class={options.class}>
			{childrenToSolid({ options, schema: html, listDepth: 0 }, hastNode())}
		</div>
	);
};

export default SolidMarkdown;
