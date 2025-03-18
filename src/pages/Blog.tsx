
import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About My Blog</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-navy-light rounded-3xl p-8 md:p-12"
      >
        <p className="text-white/80 mb-8 leading-relaxed">
          I've experimented with many note-taking tools over the years, which has led to my notes being scattered across platforms like Youdao Cloud Notes, Mubu, Flomo, and Yuque. After comparing them all, I've found that Yuque's openness and support for third-party integrations makes it the most suitable platform for my knowledge base. I'll be gradually organizing my collected materials there, and when I have time to develop my own website, I'll likely sync content here as well—collecting, reviewing, outputting, and digesting as I go.
        </p>

        <div className="flex items-center space-x-2 text-white/60 mb-6">
          <span>Yuque address:</span>
          <a
            href="http://www.yuque.com/lisanqiu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline"
          >
            www.yuque.com/lisanqiu
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
