import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Ref: https://astro.build/config
// Ref: https://docs.astro.build/en/guides/integrations-guide/tailwind/
// Ref: https://github.com/withastro/docs/blob/main/astro.config.ts

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAutolinkHeadings],
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeAutolinkHeadings],
      extendPlugins: false,
    }),
    tailwind(),
    solidJs(),
  ],
});
