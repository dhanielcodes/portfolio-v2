import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Arrow from "<absolute>/images/arrow.svg";

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
const ContactSection = () => {
  return (
    <a
      target="_blank"
      href="mailto:me@dhaniel.site"
      className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear block  col-span-3  w-full p-[30px] flex justify-between flex-col h-full  rounded-2xl text-white`}
    >
      <div className="flex justify-between">
        <span className="text-[18px] leading-6 font-[Gilroy-Medium]">
          Have some
          <br />
          questions?
        </span>
        <Image src={Arrow} className="" alt={""} />
      </div>
      <div className="lg:text-[50px] text-[30px] font-[Gilroy-Medium]">
        Contact me: me@dhaniel.site
      </div>
    </a>
  );
};

ContactSection.propTypes = propTypes;
ContactSection.defaultProps = defaultProps;
// #endregion

export default ContactSection;
