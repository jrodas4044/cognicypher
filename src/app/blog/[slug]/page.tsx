import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Head from "next/head";

export default function Post({ params }: { params: { slug: string } }) {
  const markdownPath = path.join("markdown", `${params.slug}.md`);
  let markdown;

  try {
    markdown = fs.readFileSync(markdownPath, "utf-8");
  } catch (error) {
    console.error(`Error al leer el archivo: ${markdownPath}`, error);
    return <div>Error: No se encontró el artículo.</div>;
  }

  const { data: frontmatter, content } = matter(markdown);

  return (
    <div className="mx-auto max-w-3xl dark:prose-invert container prose">
      <Head>
        <title>{frontmatter.title || "Blog de Cognicypher"}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.tags.join(", ")} />
        <meta
          name="author"
          content="Jonhathan Rolando Rodas Lopez - Cognicypher"
        />
        <link
          rel="canonical"
          href={`https://cognicypher.com/blog/${params.slug}`}
        />
      </Head>

      <article className="mx-auto">
        <MDXRemote source={content} />
      </article>

      <h3>Tags:</h3>
      <div className="flex flex-wrap gap-2">
        {frontmatter.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-sky-700 px-2 py-1 rounded-md text-white"
          >
            {tag}
          </span>
        ))}

        <div>
          <Link href="/blog/list">Volver a la lista de artículos</Link>
        </div>
      </div>
    </div>
  );
}
