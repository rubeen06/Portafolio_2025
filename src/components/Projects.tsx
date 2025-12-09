import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Gestion de Personal',
      description:
        'CRUD de Gestión de Personal de Hospitales',
      image: '/img/proyectoHospitales.png',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'Git', 'GitHub', 'Docker', 'Docker Compose'],
      backend: 'https://github.com/rubeen06/GestionHospitalBackEnd.git',
      frontend: 'https://github.com/rubeen06/GestionHospitalFrontEnd.git',
    },
    {
      title: 'App Móvil Mi Agenda',
      description:
        'Aplicación móvil que se basa en una agenda donde puedes gestionar eventos, notas y tareas. El usuario puede logearse y registrarse con usuario y contraseña.',
      image: '/img/proyectoMiAgenda.png',
      tags: ['Java', 'Node.js', 'Retrofit', 'MongoDB'],
      backend: 'https://github.com/rubeen06/MiAgendaBackEnd.git',
      frontend: 'https://github.com/rubeen06/MiAgendaFrontEnd.git',
    },
    /*{
      title: 'Mobile Fitness App',
      description:
        'Aplicación móvil para seguimiento de ejercicios, planes de entrenamiento personalizados y estadísticas de progreso.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0OTY2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Developer Portfolio',
      description:
        'Portfolio interactivo con animaciones, modo oscuro/claro y sistema de blog integrado usando MDX.',
      image: 'https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0OTcwMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'MDX', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },*/
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Backend</span>
                  </a>
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Frontend</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
