import React from "react";
import { motion } from "framer-motion";
import { blogs } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const card = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.25 },
  }),
};

function BlogCard({ post, i }) {
  return (
    <motion.article
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={card}
      className="group rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
    >
      <a href={post.href} target="_blank" rel="noreferrer" className="block">
        {post.cover ? (
          <img src={post.cover} alt={post.title} className="h-44 w-full object-cover" />
        ) : (
          <div className="h-44 w-full bg-gray-100" />
        )}

        <div className="p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">
              {post.title}
            </h3>
            <span className="text-xs text-gray-500 shrink-0">{post.date}</span>
          </div>

          <p className="mt-2 text-sm text-gray-700 line-clamp-2">
            {post.summary}
          </p>

          <span className="mt-4 inline-block text-sm underline underline-offset-4">
            Read on Substack
          </span>
        </div>
      </a>
    </motion.article>
  );
}

function Blog() {
  return (
    <section id="blog" className="w-full px-4 md:px-6 lg:px-8 py-10 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        {/* Header matches Projects: small gray label + big white title */}
        <p className={`${styles.sectionSubText} uppercase text-gray-400`}>
          Thoughts I didn’t keep to myself
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Blog.
        </h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((post, i) => (
            <BlogCard key={post.id} post={post} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Blog, "blog");
