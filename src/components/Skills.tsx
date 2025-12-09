import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  SiNodedotjs, SiPhp, SiSpringboot, SiAngular, SiReact, SiPython, 
  SiDotnet, SiMongodb, SiOracle, SiMysql, SiGit, SiDocker
} from 'react-icons/si';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: 'Angular', icon: <SiAngular size={48} /> },
    { name: 'React', icon: <SiReact size={48} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={48} /> },
    { name: 'Php', icon: <SiPhp size={48} /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={48} /> },
    { name: 'Python', icon: <SiPython size={48} /> },
    { name: 'ASP.NET', icon: <SiDotnet size={48} /> },
    { name: 'MongoDB', icon: <SiMongodb size={48} /> },
    { name: 'Oracle', icon: <SiOracle size={48} /> },
    { name: 'MySQL', icon: <SiMysql size={48} /> },
    { name: 'Git', icon: <SiGit size={48} /> },
    { name: 'Docker', icon: <SiDocker size={48} /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.2, y: -10 }}
              className="group relative cursor-pointer"
            >
              <div className="text-white flex justify-center">{tech.icon}</div>
              <div className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded whitespace-nowrap">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
