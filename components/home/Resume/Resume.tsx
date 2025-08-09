import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";

function Resume() {
  return (
    <div className="pt-20 pb-16" id="resume">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard
              Icon={BsDatabase}
              role="Frontend Developer"
              subject="Samian Soft"
              image="/images/samian.png"
              description="In this company, I have become acquainted with test composing.
                In order to test the functions I have used Jest and Enzyme libraries and for testing components, the Cypress library as well.
                Also, I have acquired a thorough knowledge of the syntax of these libraries and was able to compose several tests.
                I intend to concentrate on the Front-end and begin to in-depth learning of the React Js library as well as (CSS - FlexBox)."
            />
          </div>
        </div>

        {/* Education part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My<span className="text-cyan-200">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={MdOutlineCastForEducation}
              role="Islamic Azad University"
              date="2016 - 2020"
              description="Master's degree, Computer Software Engineering"
            />
            <ResumeCard
              Icon={MdOutlineCastForEducation}
              role="Islamic Azad University"
              date="2008 - 2012"
              description="Bachelor's degree, Computer Software Engineering"
            />
            <ResumeCard
              Icon={MdOutlineCastForEducation}
              role="Islamic Azad University"
              date="2006 - 2008"
              description="Associate's degree, Computer Software Engineering"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
