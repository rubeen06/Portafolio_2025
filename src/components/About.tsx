import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { User, Heart, Target } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-white mb-4">
              Sobre Mí
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl transform rotate-3" />
                <div className="relative bg-slate-800 p-8 rounded-2xl">
                  <User className="text-purple-400 mb-4" size={48} />
                  <p className="text-gray-300 mb-4">
                    Soy un desarrollador junior con gran pasión por la tecnología y el desarrollo
                    de software. Aunque estoy al inicio de mi carrera profesional, tengo un fuerte
                    compromiso con el aprendizaje continuo y la mejora de mis habilidades.
                  </p>
                  <p className="text-gray-300">
                    Me especializo en desarrollo full-stack con tecnologías modernas como React,
                    Angular, Node.js y Spring Boot. Busco oportunidades para aplicar mis conocimientos
                    y crecer como desarrollador.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Heart className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Pasión</h3>
                    <p className="text-gray-400">
                      Me apasiona aprender nuevas tecnologías y enfrentar nuevos desafíos
                      que me permitan crecer profesionalmente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Target className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Objetivos</h3>
                    <p className="text-gray-400">
                      Conseguir mi primera oportunidad profesional y desarrollarme como
                      programador full-stack en un equipo que valore el aprendizaje y la innovación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-purple-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Proyectos</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-blue-400 mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Tecnologías</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-green-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Motivación</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}