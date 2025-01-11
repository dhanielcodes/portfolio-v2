import React from "react";

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
export const LinkSection = () => {
  return (
    <div
      className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   uppercase w-full row-span-1 mt-4 p-[20px] items-center h-full flex justify-around rounded-2xl text-white`}
    >
      <a href="https://flowcv.com/resume/gkufdh1f6s" target="_blank">
        <span className="text-[20px] font-[Gilroy-Light]">Resume</span>
      </a>
      <a href="https://github.com/dhanielcodes" target="_blank">
        <span className="text-[20px] font-[Gilroy-Light]">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-adekoya-010810192/"
        target="_blank"
      >
        <span className="text-[20px] font-[Gilroy-Light]">Linkedin</span>
      </a>
    </div>
  );
};

LinkSection.propTypes = propTypes;
LinkSection.defaultProps = defaultProps;
// #endregion

export default LinkSection;
