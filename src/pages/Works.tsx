
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Full-Stack Chat Application",
    image: "public/lovable-uploads/42e61094-21ce-4ebb-8fff-1192c8114a01.png",
    category: "Socket.IO, Node.js, React",
    year: "2024"
  },
  {
    id: 2,
    title: "Real-time Device Tracker",
    image: "public/lovable-uploads/78ac5df7-a1a4-4ed5-a74c-0bed08617320.png",
    category: "JavaScript, Node.js, Express.js",
    year: "2023"
  },
  {
    id: 3,
    title: "J.P. Morgan Software Engineering Virtual Experience",
    image: "public/lovable-uploads/33e92bf7-10b1-4f87-845d-2ec84cbd98cb.png",
    category: "Web Development",
    year: "2023"
  }
];

const Works = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-navy-light rounded-3xl overflow-hidden project-card"
          >
            <div className="p-4">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white hover:text-purple transition-colors">
                {project.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-xs font-medium">
                  {project.category}
                </span>
                <span className="text-white/50 text-5xl font-bold opacity-30">
                  {project.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Works;
