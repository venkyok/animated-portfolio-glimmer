
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">关于博客</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-navy-light rounded-3xl p-8 md:p-12"
      >
        <p className="text-white/80 mb-8 leading-relaxed">
          由于早期研究的笔记工具时间的时间太多，导致我的笔记散落各地，比如有道云笔记、幕布、flomo、语雀等等，目前经过对比后，语雀的开放性和支持各种插入第三方工具的功能使我觉得目前是最适合作为我的知识库平台的，因此将来会一步一步将收集的素材整理起来，将来有时间将自己的网站开发出来的话，应该也会同步过来，一边收集，一边回顾，一边输出，一边消化。
        </p>

        <div className="flex items-center space-x-2 text-white/60 mb-6">
          <span>语雀地址:</span>
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
