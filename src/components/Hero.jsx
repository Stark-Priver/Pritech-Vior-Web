import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Make sure this is imported
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Adrian";
  const typingSpeed = 150; // Typing speed in milliseconds
  const deletingSpeed = 100; // Deleting speed in milliseconds
  const delayBeforeDelete = 1000; // Delay before starting to delete

  useEffect(() => {
    let typingInterval;
    let deletingInterval;

    const typeText = () => {
      let index = 0;
      typingInterval = setInterval(() => {
        setText((prevText) => prevText + fullText[index]);
        index += 1;
        if (index === fullText.length) {
          clearInterval(typingInterval);
          setTimeout(deleteText, delayBeforeDelete); // Start deleting after a delay
        }
      }, typingSpeed);
    };

    const deleteText = () => {
      let index = fullText.length;
      deletingInterval = setInterval(() => {
        setText((prevText) => prevText.slice(0, index - 1));
        index -= 1;
        if (index === 0) {
          clearInterval(deletingInterval);
          setTimeout(typeText, delayBeforeDelete); // Start typing again after a delay
        }
      }, deletingSpeed);
    };

    typeText();

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{text}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
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
