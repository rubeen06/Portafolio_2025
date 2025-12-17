import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const email = "rubendelanieta6@gmail.com";
  const phone = "+34616030242";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };


  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Título */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-white mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-slate-800/50 p-12 bg-transparent"
          >
            <p className="text-gray-300 mb-8 text-lg">
              Si estás interesado en mis servicios puedes contactar conmigo en cualquier opción que te dejo aquí
            </p>

            
            {/* Íconos de contacto */}
            <div className="flex justify-center gap-8 mt-12 text-white text-3xl">

              {/* Email */}
              <button
                onClick={() => handleCopy(email)}
                className="hover:text-purple-400 transition"
                title="Copiar email"
              >
                <Mail size={34} />
              </button>

              {/* Teléfono */}
              <button
                onClick={() => handleCopy(phone)}
                className="hover:text-purple-400 transition"
                title="Copiar teléfono"
              >
                <Phone size={34} />
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/rubeen06"
                target="_blank"
                className="hover:text-purple-400 transition"
                title="GitHub"
              >
                <Github size={34} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rub%C3%A9n-de-la-nieta-27bbb1198/"
                target="_blank"
                className="hover:text-purple-400 transition"
                title="LinkedIn"
              >
                <Linkedin size={34} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-slate-800 text-center text-gray-400"
        >
          <p>© 2025 Rubén De la Nieta Hernández. Hecho con React</p>
        </motion.div>
      </div>
    </section>
  );
}
