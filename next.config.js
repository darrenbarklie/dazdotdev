/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If `MDXProvider` required:
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  // Strict mode
  reactStrictMode: true,
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // SWC config for styled-components, Next v12.2 required
  // Ref: https://nextjs.org/docs/advanced-features/compiler
  compiler: {
    styledComponents: true,
  },
  // SWC minify
  swcMinify: true,
});
