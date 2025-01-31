import React from "react";
import PropTypes from "prop-types";

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
const NavSection = () => {
  return (
    <div
      className={`bg-black hover:bg-[#1f1f1f] border-2 border-[#6a6a6a] transition duration-150 ease-linear   uppercase font-[Gilroy-Medium] p-[20px] flex items-center gap-2 h-full text-[20px] rounded-2xl text-white`}
    >
      <span className={`font-[Gilroy-Light] italic`}>Daniel</span> Adekoya
    </div>
  );
};

NavSection.propTypes = propTypes;
NavSection.defaultProps = defaultProps;
// #endregion

export default NavSection;
