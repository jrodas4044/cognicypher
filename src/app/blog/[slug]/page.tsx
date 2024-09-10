import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postsDirectory = path.join(process.cwd(), "markdown");
  const markdownPath = path.join(postsDirectory, `${params.slug}.md`);
  let markdown;
  try {
    markdown = fs.readFileSync(markdownPath, "utf-8");
    const { data: frontmatter } = matter(markdown);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      keywords: frontmatter.tags.join(", "),
      authors: [
        {
          name: "Jonhathan Rolando Rodas Lopez",
          url: "https://jonhathanrodas.com",
        },
        {
          name: "Cognicypher - Inteligencia Aplicada",
          url: "https://cognicypher.com",
        },
      ],
      openGraph: {
        images: [
          {
            url: `https://cognicypher.com/images/blog/${params.slug}.png`,
            width: 1200,
            height: 630,
          },
        ],
        type: "article",
        siteName: "Cognicypher - Inteligencia Aplicada",
        locale: "es-ES",
        title: frontmatter.title,
        description: frontmatter.description,
      },
    };
  } catch (error) {
    console.error(`Error al leer el archivo: ${markdownPath}`, error);
    return { title: "Error", description: "No se encontró el artículo." }; // Cambiado aquí
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "markdown");
  const files = fs.readdirSync(postsDirectory);
  const slugs = files.map((file) => file.replace(/\.md$/, ""));
  return slugs.map((slug) => ({ slug }));
}

export default function Post({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), "markdown"); // Cambiado aquí
  const markdownPath = path.join(postsDirectory, `${params.slug}.md`);
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
