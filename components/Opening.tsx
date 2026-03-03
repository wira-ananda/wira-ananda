"use client";
import React, { useState, useEffect } from "react";
import wiraLogo from "@/public/img/wira-light.svg";
import { motion, AnimatePresence, Variants } from "framer-motion";

const animationVariants: Variants = {
  awal: {
    opacity: 0,
  },
  awal2: {
    opacity: 0,
  },
  skillsAwal: {
    opacity: 0,
    y: -100,
  },
  skillsAkhir: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  akhir: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  akhir1: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
    },
  },
  akhir2: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2,
    },
  },
  akhir3: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 3,
    },
  },
};

const Opening: React.FC = () => {
  // Menggunakan tipe boolean untuk state
  const [showOpening, setShowOpening] = useState<boolean>(true);
  const [textOpening1, setTextOpening1] = useState<boolean>(true);
  const [textOpening2, setTextOpening2] = useState<boolean>(true);
  const [textOpening3, setTextOpening3] = useState<boolean>(true);

  // Mengatur timeout untuk update state
  useEffect(() => {
    const openingTimeout = setTimeout(() => {
      setShowOpening(false);
    }, 5000);

    const textTimeout1 = setTimeout(() => {
      setTextOpening1(false);
    }, 4500);

    const textTimeout2 = setTimeout(() => {
      setTextOpening2(false);
    }, 3500);

    const textTimeout3 = setTimeout(() => {
      setTextOpening3(false);
    }, 3000);

    // Membersihkan timeout saat komponen dibersihkan
    return () => {
      clearTimeout(openingTimeout);
      clearTimeout(textTimeout1);
      clearTimeout(textTimeout2);
      clearTimeout(textTimeout3);
    };
  }, []);

  return (
    <AnimatePresence>
      {showOpening && (
        <motion.div
          id="openingAnimation"
          variants={animationVariants}
          animate="akhir"
          transition={{ duration: 0.55 }}
          exit={{ y: -1000 }}
          className="text-white"
        >
          <span className="text-center text-[2rem] top-8 m-auto">
            <AnimatePresence>
              {textOpening1 && (
                <motion.img
                  variants={animationVariants}
                  initial="awal"
                  animate="akhir1"
                  src={wiraLogo}
                  alt="logo wira"
                  className="block right-[3px] top-[28%] m-auto w-[15rem]"
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>

            <motion.span
              className="top-[28%]"
              variants={animationVariants}
              initial="awal"
              animate="akhir2"
            >
              <AnimatePresence>
                {textOpening2 && (
                  <motion.h1 exit={{ opacity: 0 }}>Web Developer</motion.h1>
                )}
              </AnimatePresence>
            </motion.span>
            <motion.span
              className="top-[28%]"
              variants={animationVariants}
              initial="awal2"
              animate="akhir2"
            >
              <AnimatePresence>
                {textOpening3 && (
                  <motion.h1 exit={{ opacity: 0 }}>Graphic Designer</motion.h1>
                )}
              </AnimatePresence>
            </motion.span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;
