
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Mail, Twitter, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">关于我</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-navy-light rounded-3xl p-8 md:p-12"
      >
        <div className="text-center mb-16">
          <p className="text-xl font-medium text-white mb-2">增强效率，快乐摸鱼</p>
          <p className="text-white/60">就随便写写，仅供参考</p>
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
              <p className="font-medium">18**********</p>
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
              <p className="font-medium">***********@163.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
              <Twitter className="w-6 h-6 text-purple" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Twitter</p>
              <p className="font-medium">三秋十李Sergio</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-purple" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Website</p>
              <p className="font-medium">三秋十李@lgy</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-lg font-medium text-purple">我爱Figma</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
