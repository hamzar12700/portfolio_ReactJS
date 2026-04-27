import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TaskMaster Pro",
      description: "A full-stack project management application with real-time updates, kanban boards, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "E-Commerce Fusion",
      description: "Modern e-commerce platform featuring a robust admin dashboard, Stripe payment integration, and dynamic product filtering.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["MERN Stack", "Redux Toolkit", "Stripe API", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "SocialSphere",
      description: "Social media app clone with features like posting updates, following users, liking, commenting, and image upload via Cloudinary.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Express", "MongoDB", "Cloudinary", "JWT"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Here are some of my recent works. Each project is a milestone in my learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-end gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/20 hover:bg-primary backdrop-blur-sm rounded-full text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="p-2 bg-white/20 hover:bg-primary backdrop-blur-sm rounded-full text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-primary dark:text-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
