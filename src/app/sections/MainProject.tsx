import React from "react";
import Image from "next/image";
import { AboutSection } from "./AboutSection";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const MainProject = () => {
  return (
    <div className={`md:mb-0 mb-4 rounded-2xl bg-black`}>
      <div
        className={`bg-black border-2 border-[#6a6a6a] p-10 transition duration-150 ease-linear md:mt-0 mt-4 overflow-hidden uppercase relative w-full h-full rounded-2xl text-white`}
      >
        <Image
          src={"/images/PORTRAIT2.jpg"}
          width={100}
          height={100}
          className="transform hover:scale-[1.1] transition-all duration-1250 ease-linear w-full h-[500px] object-cover opacity-5 absolute top-0 left-0"
          alt={""}
        />
        <AboutSection />
      </div>
    </div>
  );
};

MainProject.propTypes = propTypes;
MainProject.defaultProps = defaultProps;
// #endregion

export default MainProject;
