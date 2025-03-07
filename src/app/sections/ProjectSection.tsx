import React from "react";
import { list } from "<absolute>/app/libs/misc";
import ProjectCard from "<absolute>/app/components/ProjectCard";

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
      className={`bg-black hover:bg-[#1f1f1f] border-2 border-[#6a6a6a] transition duration-150 ease-linear row-span-4 w-full p-[30px] h-[78vh] overflow-hidden overflow-y-scroll rounded-2xl text-white`}
    >
      <h1 className="text-[35px] mt-6 font-[Gilroy-Medium]">Projects</h1>
      <hr className="my-8" />
      {list
        ?.filter((work: any) => !work?.side)
        ?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <ProjectCard item={item} />
            </div>
          );
        })}
    </div>
  );
};

ProjectSection.propTypes = propTypes;
ProjectSection.defaultProps = defaultProps;
// #endregion

export default ProjectSection;
