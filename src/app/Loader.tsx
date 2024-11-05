import React, { useEffect, useState } from "react";
import Flower from "<absolute>/images/FLOWER.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <motion.div
      /*  initial={{ transform: "translateY(0%)", opacity: 1 }}
            whileInView={{ transform: "translateY(0%)", opacity: 0 }}
            transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
                delay: 0.2,
            }} */ animate={{ opacity: loading ? 1 : 0 }}
      className={`w-full h-screen fixed top-0 left-0 bg-[#000] grid place-items-center z-10 ${
        loading ? "" : "pointer-events-none"
      }`}
    >
      <Image src={Flower} className=" animate-spin-slow" alt={""} />
    </motion.div>
  );
}
