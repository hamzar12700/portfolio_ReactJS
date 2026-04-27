import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML / CSS', level: 95, icon: '🎨' },
    { name: 'JavaScript (ES6+)', level: 90, icon: '💛' },
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'Tailwind CSS', level: 90, icon: '🌊' },
    { name: 'Node.js', level: 75, icon: '🟩' },
    { name: 'Express.js', level: 80, icon: '🚂' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'Git & GitHub', level: 85, icon: '🐙' }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A snapshot of the technologies I've been working with recently. I'm always looking to learn and expand my skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg flex items-center gap-3">
                  <span>{skill.icon}</span> {skill.name}
                </span>
                <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
