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
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-teal-700 min-h-screen text-white">
      <div className="mx-auto px-4 py-8 container">
        <article className="bg-gray-900/80 shadow-lg backdrop-blur-sm mb-8 p-8 rounded-lg max-w-none prose-invert prose">
          <MDXRemote source={content} />
        </article>

        <h3 className="mb-4 font-semibold text-2xl text-teal-300">
          Etiquetas:
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {frontmatter.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-teal-500 to-blue-600 px-3 py-1 rounded-full font-medium text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog/list"
            className="bg-gradient-to-r from-blue-500 hover:from-blue-600 to-teal-500 hover:to-teal-600 shadow-md hover:shadow-lg px-6 py-3 rounded-full font-bold text-white transition duration-300"
          >
            Volver a la lista de artículos
          </Link>
        </div>
      </div>
    </div>
  );
}
