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
            <ResumeCard
              date="Jan 2025 - Present"
              url="https://ossolutions.ir/"
              role="Frontend Developer"
              subject="Pishgaman Matn Baz"
              image="/images/pishgaman.png"
              description="As a Frontend Developer at Pishgaman Matn Baz, I focus on building modern web applications using Next.js as the primary framework. When I first joined, my goal was to strengthen my skills in React and gain in-depth knowledge of Next.js, which has now become my main area of expertise.

              During this role :
              Developed a complete project independently, applying best practices in front-end development.
              Collaborated on a larger team project, contributing to both design and implementation.
              Leveraged Ant Design to accelerate the development of high-quality and reusable UI components.
              Continuously enhanced my technical skills in HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, and Ant Design.
              I am committed to expanding my knowledge of Next.js through continuous learning and practice, with the goal of delivering scalable, high-performance applications."
            />
            <ResumeCard
              date="Nov 2023 - Aug 2024"
              url="https://codingfront.dev/"
              role="Frontend Developer"
              subject="Coding Front"
              image="/images/codingfront.jpg"
              description="During my internship at a coding bootcamp focused on front-end development, I gained hands-on experience in building and designing web applications. Key achievements include:
                 Acquired skills in HTML and CSS, including page layout design using Flexbox and Grid systems.
                 Learned JavaScript and React.js, with a focus on component development and working with functions.
                 Completed three practical projects using React, showcasing responsive design and interactive UI components."
            />
            <ResumeCard
              date="Nov 2020 - Sep 2021"
              url="https://samiansoft.ir/"
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
