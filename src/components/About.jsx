import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cards = [
    {
      icon: <Layout className="text-primary" size={28} />,
      title: "Frontend Development",
      desc: "Building beautiful, interactive UIs using React and Tailwind CSS."
    },
    {
      icon: <Server className="text-secondary" size={28} />,
      title: "Backend Development",
      desc: "Creating robust APIs and server logic with Node.js and Express."
    },
    {
      icon: <Database className="text-indigo-500" size={28} />,
      title: "Database Management",
      desc: "Designing schemas and managing data with MongoDB and Mongoose."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
             I am an enthusiastic Computer Science student and a self-taught web developer. 
             My passion lies in bridging the gap between design and engineering to create 
             web applications that look good and function flawlessly under the hood.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
