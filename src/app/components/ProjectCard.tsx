import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

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

interface ProjectCardInterface {
  item?: any;
}
const ProjectCard = ({ item }: ProjectCardInterface) => {
  return (
    <a
      className="mb-6 border-2 font-[Gilroy-Medium] border-[#454545] p-6 rounded-[30px] block"
      target="_blank"
      href={item?.link}
    >
      <div className="flex justify-between">
        <span className="text-[25px] font-[Gilroy-Medium]">{item?.title}</span>
        <Image
          src={"/images/arrow.svg"}
          width={20}
          height={20}
          className=""
          alt={""}
        />
      </div>

      <Image
        alt=""
        className="w-full rounded-2xl h-[230px] mt-4 pointer-events-none border-2 border-[#6d6d6d]"
        src={item?.src}
        width={1000}
        height={1000}
      />
      <div className="mt-5">{item?.desc}</div>
    </a>
  );
};

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;
// #endregion

export default ProjectCard;
