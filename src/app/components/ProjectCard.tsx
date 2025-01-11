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

interface ProjectCardInterface {
  item?: any;
}
const ProjectCard = ({ item }: ProjectCardInterface) => {
  return (
    <a className="mb-6 block" target="_blank" href={item?.link}>
      <div className="flex justify-between">
        <span className="text-[25px] font-[Gilroy-Medium]">{item?.title}</span>
        <Image src={Arrow} className="" alt={""} />
      </div>

      <Image
        alt=""
        className="w-full rounded-2xl h-[260px] mt-4 pointer-events-none"
        src={item?.src}
      />
      <hr className="mt-8" />
    </a>
  );
};

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;
// #endregion

export default ProjectCard;
