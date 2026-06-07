import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [isGlow, setIsGlow] = useState(false);
  const title = "BHASKAR PHOTOGRAPHY";

  useEffect(() => {
    // Show tagline shortly after
    const taglineTimer = setTimeout(() => {
      setTaglineVisible(true);
    }, 1200);

    // Turn on glow
    const glowTimer = setTimeout(() => {
      setIsGlow(true);
    }, 1500);

    // Complete splash
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2400); // 2.4s total for luxurious visual pacing

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(glowTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Letter transition presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      id="splash-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-charcoal z-[100] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Film Grain overlay */}
      <div className="film-grain" id="splash-grain" />

      <div className="max-w-4xl text-center px-4 select-none">
        {/* Brand Name */}
        <motion.div
          id="splash-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`font-cormorant font-light text-gold uppercase transition-all duration-700 ${
            isGlow ? 'drop-shadow-[0_0_15px_rgba(212,175,106,0.35)]' : ''
          }`}
        >
          {/* First Line: BHASKAR */}
          <div className="block mb-2 sm:mb-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.25em] whitespace-nowrap">
            {"BHASKAR".split("").map((char, index) => (
              <motion.span
                key={`b-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          {/* Second Line: PHOTOGRAPHY */}
          <div className="block text-[22px] sm:text-[38px] md:text-[52px] lg:text-[68px] tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.25em] whitespace-nowrap">
            {"PHOTOGRAPHY".split("").map((char, index) => (
              <motion.span
                key={`p-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Separator Line */}
        <motion.div
          id="splash-divider"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 0.5, opacity: 0.3 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="h-[1px] bg-mutedgold w-36 mx-auto my-6"
        />

        {/* Tagline */}
        <AnimatePresence>
          {taglineVisible && (
            <motion.p
              id="splash-tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-montserrat font-light text-xs sm:text-[13px] tracking-[0.3em] text-mutedgold uppercase leading-relaxed"
            >
              Capturing Timeless Stories, One Frame at a Time
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle indicator */}
      <motion.div
        id="splash-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-12 font-mono text-[10px] uppercase tracking-[0.2em] text-mutedgold"
      >
        Initializing Premium Experience
      </motion.div>
    </motion.div>
  );
}
