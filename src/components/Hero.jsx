import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const rotatingSubtexts = [
  "Empowering your technological curiosity.",
  "Learn, explore, and innovate with us.",
  "Master web development, AI, and hacking.",
  "Unlock the secrets of computers and mobile devices.",
  "Build a better tomorrow, today.",
];

const Hero = () => {
  const [subtext, setSubtext] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentSubtext =
        rotatingSubtexts[loopIndex % rotatingSubtexts.length];
      const updatedSubtext = isDeleting
        ? currentSubtext.substring(0, subtext.length - 1)
        : currentSubtext.substring(0, subtext.length + 1);

      setSubtext(updatedSubtext);

      if (!isDeleting && updatedSubtext === currentSubtext) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedSubtext === "") {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
        setTypingSpeed(100);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [subtext, isDeleting, loopIndex, typingSpeed]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Welcome to{" "}
            <span className="text-[#915EFF], outline-text">PRITECH VIOR</span>
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {subtext}
            <span className="blinking-cursor">|</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
