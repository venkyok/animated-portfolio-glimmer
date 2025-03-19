import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Mail, Github, Linkedin, Twitter } from "lucide-react";

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
        <div className="text-center mb-10">
          <p className="text-xl font-medium text-white mb-2">
            Passionate about building scalable, high-performance web applications.
          </p>
          <p className="text-purple mr-6">
            YOU CAN FIND ME ON
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ContactInfo
            icon={<Twitter className="w-6 h-6 text-purple" />}
            label="x"
            value="Venky3K_"
            link="https://x.com/Venky3K_"
          />
          <ContactInfo
            icon={<Mail className="w-6 h-6 text-purple" />}
            label="Email"
            value="VY916014@gmail.com"

          />
          <ContactInfo
            icon={<Linkedin className="w-6 h-6 text-purple" />}
            label="LinkedIn"
            value="venky-a-45424924a"
            link="https://www.linkedin.com/in/venky-a-45424924a"
          />
          <ContactInfo
            icon={<Github className="w-6 h-6 text-purple" />}
            label="GitHub"
            value="venkyok"
            link="https://github.com/venkyok"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          
        </motion.div>
      </motion.div>
    </div>
  );
};

const ContactInfo = ({ icon, label, value, link }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="flex items-center space-x-4"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-white/60 text-sm">{label}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-purple transition-colors">
          {value}
        </a>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  </motion.div>
);

export default About;
