"use client";

import Loader from "<absolute>/app/Loader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AboutSection } from "<absolute>/app/sections/AboutSection";
import ContactSection from "<absolute>/app/sections/ContactSection";
import LinkSection from "<absolute>/app/sections/LinkSection";
import TitleSection from "<absolute>/app/sections/TitleSection";
import NavSection from "<absolute>/app/sections/NavSection";
import ProjectSection from "<absolute>/app/sections/ProjectSection";
import PersonalSection from "<absolute>/app/sections/PersonalSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <>
      <Loader />
      <div className="bg-gradient-to-br from-black via-zinc-black to-zinc-900">
        <motion.div
          animate={{
            opacity: loading ? 0 : 1,
            transform: loading ? "translateY(10%)" : "translateY(0%)",
            type: "spring",
          }}
          className="p-4 max-w-[1100px] gap-4 mx-auto"
        >
          <NavSection />
          <br />
          <TitleSection />
          <br />
          <div className={`grid md:grid-cols-2 gap-4`}>
            <ProjectSection />
            <PersonalSection />
          </div>
          <br />
          <div
            className={`grid md:grid-cols-6 grid-cols-1 row-span-5 gap-4 rounded-2xl h-[400px]`}
          >
            <AboutSection />
            <ContactSection />
          </div>
          <br />
          <LinkSection />
        </motion.div>
      </div>
    </>
  );
}
