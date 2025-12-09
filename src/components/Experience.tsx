import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'ATOS IT SERVICES SPAIN',
      position: 'Junior Full Stack Developer',
      period: 'Marzo 2024 - Junio 2024',
      description:
        'Participé en un proyecto para la Junta de Castilla-La Mancha junto a un equipo de 4 desarrolladores. El objetivo principal era digitalizar formularios mediante un sistema de escaneo que permitía almacenarlos en una base de datos y registrar automáticamente a los usuarios.',
      achievements: [
        'Desarrollo de funcionalidades con Angular para la interfaz de usuario',
        'Implementación de servicios y lógica backend con Spring Boot',
        'Automatización de procesamiento de formularios con Python',
        'Diseño y gestión de la base de datos en MySQL',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Experiencia Profesional</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Línea del timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex justify-center"
              >
                {/* Tarjeta centrada */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all w-full md:w-3/4 lg:w-2/3 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3 text-purple-400">
                    <Briefcase size={20} />
                    <h3 className="text-white">{exp.position}</h3>
                  </div>

                  <div className="text-gray-300 mb-2">{exp.company}</div>

                  <div className="flex justify-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <ul className="space-y-2 text-left mx-auto w-fit">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Punto del timeline centrado */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-4 h-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                    className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
