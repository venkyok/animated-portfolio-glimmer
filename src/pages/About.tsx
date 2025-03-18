
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Mail, Github, Linkedin, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-navy-light rounded-3xl p-8 md:p-12"
      >
        <div className="text-center mb-16">
          <p className="text-xl font-medium text-white mb-2">Time Management, Teamwork, Problem-solving and Leadership</p>
          <p className="text-white/60">Computer Science student with a passion for building web applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-purple" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Phone</p>
              <p className="font-medium">9381264151</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Email</p>
              <p className="font-medium">VY916014@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-purple" />
            </div>
            <div>
              <p className="text-white/60 text-sm">LinkedIn</p>
              <a href="https://www.linkedin.com/in/venky-a-45424924a" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-purple transition-colors">venky-a-45424924a</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
              <Github className="w-6 h-6 text-purple" />
            </div>
            <div>
              <p className="text-white/60 text-sm">GitHub</p>
              <a href="https://github.com/venkyok" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-purple transition-colors">venkyok</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-lg font-medium text-purple">Currently pursuing B.Tech in Computer Science (Data Science) - 8th semester</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
