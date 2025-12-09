import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  const generateShootingStars = () => {
    const shootingStars: Star[] = [];
    for (let i = 0; i < 3; i++) {
      shootingStars.push({
        id: i + 1000,
        x: Math.random() * 100,
        y: Math.random() * 50,
        size: 2,
        duration: Math.random() * 2 + 1,
        delay: i * 3,
      });
    }
    return shootingStars;
  };

  const shootingStars = generateShootingStars();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static stars with twinkle */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, 200],
            y: [0, 200],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            repeatDelay: 8,
          }}
        >
          <div className="relative">
            {/* Shooting star head */}
            <div className="w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" />
            {/* Shooting star tail */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-y-1/2"
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
                transformOrigin: 'left center',
                rotate: '45deg',
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Larger twinkling stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`twinkle-${i}`}
          className="absolute rounded-full bg-purple-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '3px',
            height: '3px',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
