
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Skills & Achievements</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-navy-light rounded-3xl p-6 md:p-12 mx-4 sm:mx-6 md:mx-auto"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-purple">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Programming</h3>
              <p className="text-white/80 leading-relaxed">
                C programming, Python, Data Structures and Algorithms
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Web Development</h3>
              <p className="text-white/80 leading-relaxed">
                HTML, CSS, JavaScript, Node.js, React.js, Express.js, WebSockets, MongoDB
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-purple">Certifications</h2>
          <ul className="space-y-4">
            <li>
              <div className="flex flex-col">
                <span className="font-semibold">Smart Coder</span>
                <span className="text-white/70">Competitive Coding, Data Structures and Algorithms and problem-solving skills (2023-2024)</span>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <span className="font-semibold">The Complete 2024 Web Development Bootcamp</span>
                <span className="text-white/70">Udemy</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-purple">Achievements</h2>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Secured Top 3 in various coding contests conducted by Smart Interviews</li>
            <li>Participated in various college hackathons</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
