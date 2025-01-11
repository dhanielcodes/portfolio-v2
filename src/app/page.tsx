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
          className="p-4 max-w-[1100px] mx-auto"
        >
          <div
            className={`w-full mb-4 md:h-screen m-auto  overflow-hidden overflow-y-auto md:grid-rows-10 gap-4 grid`}
          >
            <NavSection />
            <div
              className={`grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:gap-4 row-span-9`}
            >
              <div
                className={`grid grid-rows-9 gap-4 w-full col-span-6 h-full rounded-2xl`}
              >
                <TitleSection />
                <div
                  className={`grid md:grid-cols-6 grid-cols-1 row-span-5 gap-4 rounded-2xl md:mb-0 mb-4`}
                >
                  <AboutSection />
                  <ContactSection />
                </div>
              </div>
            </div>
          </div>
          <div className={`grid md:grid-cols-2 gap-4`}>
            <ProjectSection />
            <PersonalSection />
          </div>
          <LinkSection />
        </motion.div>
      </div>
    </>
  );
}
