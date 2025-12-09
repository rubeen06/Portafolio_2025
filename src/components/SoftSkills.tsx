import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function SoftSkills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const softSkills = [
    { name: 'Trabajo en Equipo', level: 85 },
    { name: 'Comunicación', level: 80 },
    { name: 'Resolución de Problemas', level: 90 },
    { name: 'Aprendizaje Continuo', level: 95 },
    { name: 'Gestión del Tiempo', level: 75 },
    { name: 'Pensamiento Analítico', level: 88 },
    { name: 'Creatividad', level: 85 },
    { name: 'Adaptabilidad', level: 92 },
  ];

  return (
    <section id="soft-skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Título */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Soft Skills</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Lista */}
        <div className="space-y-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all"
            >
              
              {/* Título y porcentaje */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white">{skill.name}</h3>
                <motion.span
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              {/* Barra base */}
              <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                
                {/* Barra blanca */}
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                >
                  {/* Efecto Shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: index * 0.1 + 1,
                    }}
                  />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
