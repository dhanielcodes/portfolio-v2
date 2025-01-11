import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Arrow from "<absolute>/images/arrow.svg";
import { list } from "<absolute>/app/libs/misc";

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
const ProjectSection = () => {
  return (
    <div
      className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear row-span-4 w-full p-[30px] h-[78vh] overflow-hidden overflow-y-scroll rounded-2xl text-white`}
    >
      <h1 className="text-[35px] mt-6 font-[Gilroy-Medium]">Projects</h1>
      <hr className="my-8" />
      {list
        ?.filter((work: any) => !work?.side)
        ?.map((item: any, index: number) => {
          return (
            <a
              className="mb-6 block"
              target="_blank"
              href={item?.link}
              key={index}
            >
              <div className="flex justify-between">
                <span className="text-[25px] font-[Gilroy-Medium]">
                  {item?.title}
                </span>
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
        })}
    </div>
  );
};

ProjectSection.propTypes = propTypes;
ProjectSection.defaultProps = defaultProps;
// #endregion

export default ProjectSection;
