import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NextPage } from "next";

import Layout from "../layouts/Layout";

interface Post {
  frontMatter: {
    title: string;
    date: string;
  };
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }, index) => {
  return (
    <>
      <Layout>
        <section id="posts">
          {posts.map(({ frontMatter: { title, date } }: Post) => (
            <article key={index}>
              <h2>{title}</h2>
              <h3>{date}</h3>
              <span></span>
            </article>
          ))}
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
