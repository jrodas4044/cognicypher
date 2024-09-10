import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

const BlogList = () => {
  const postsDirectory = path.join("markdown");
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((file) => {
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter } = matter(fileContents);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      slug: frontmatter.slug.split(".")[0],
    };
  });

  return (
    <div className="mx-auto px-4 py-8 container">
      <Head>
        <title>Lista de Artículos del Blog</title>
        <meta
          name="description"
          content="Lista de artículos del blog de Cognicypher"
        />
        <meta
          name="keywords"
          content="blog, Cognicypher, artículos, tecnología"
        />
        <meta
          name="author"
          content="Jonhathan Rolando Rodas Lopez - Cognicypher"
        />
        <link rel="canonical" href="https://cognicypher.com/blog/list" />
      </Head>
      <h1 className="mb-6 font-bold text-3xl">Lista de Artículos del Blog</h1>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li
            key={(post.slug, index)}
            className="bg-gray-100 dark:bg-slate-800 shadow p-4 rounded-lg"
          >
            <Link href={`/blog/${post.slug}`} className="hover:text-sky-500">
              <h2 className="font-bold text-xl">{post.title}</h2>
              <p>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
