import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";

interface BlogPost {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  _raw: {
    sourceFileName: string;
  };
}

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post: BlogPost) => post._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [
      rehypeCodeTitles,
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "github-dark",
          defaultLang: "plaintext",
        },
      ],
    ],
  },
});
