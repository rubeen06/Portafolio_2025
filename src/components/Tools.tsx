import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { SiGithub, SiAndroidstudio, SiEclipseide, SiPostman, SiDocker } from 'react-icons/si';
import { VscVscode} from 'react-icons/vsc';
import { DiVisualstudio } from "react-icons/di";

export function Tools() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tools = [
    { name: 'VS Code', icon: <VscVscode size={48} /> },
    { name: 'Visual Studio 2022', icon: <DiVisualstudio size={48} /> },
    { name: 'Android Studio', icon: <SiAndroidstudio size={48} /> },
    { name: 'Eclipse', icon: <SiEclipseide size={48} /> },
    { name: 'Postman', icon: <SiPostman size={48} /> },
    { name: 'GitHub', icon: <SiGithub size={48} /> },
    { name: 'Docker Desktop', icon: <SiDocker size={48} /> },
  ];

  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Herramientas que uso</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.2, y: -10 }}
              className="group relative cursor-pointer"
            >
              <div className="text-white flex justify-center">{tool.icon}</div>
              <div className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded whitespace-nowrap">
                {tool.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
