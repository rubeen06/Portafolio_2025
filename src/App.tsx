import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Tools } from './components/Tools';
import { SoftSkills } from './components/SoftSkills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { StarryBackground } from './components/StarryBackground';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <StarryBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <SoftSkills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}