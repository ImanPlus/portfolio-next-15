import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="pt-16 pb-16" id="works">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <Link
            href="https://strm-vibe.netlify.app/movies?page=1"
            target="_blank"
          >
            <Image
              src="/images/stream-vibe.png"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </Link>
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Displaying information of the top 250 IMDB movies using an API
            integration.
          </h1>
          <h1 className="pt-2 font-medium text-white/80 ">
            React - Tailwind, Front-end
          </h1>
        </div>

        {/* 2st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <Link href="https://rick-morty-wb-app.netlify.app/" target="_blank">
            <Image
              src="/images/rick-morty.png"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </Link>
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Displaying information about characters from the animated series
            Rick and Morty, via a public API.
          </h1>
          <h1 className="pt-2 font-medium text-white/80 ">
            React - Tailwind, Front-end
          </h1>
        </div>

        {/* 3st project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Link href="https://salzone.netlify.app/" target="_blank">
            <Image
              src="/images/Recipes.png"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </Link>
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Single-Page Food Recipe Template
          </h1>
          <h1 className="pt-2 font-medium text-white/80 ">
            React - Tailwind, Front-end
          </h1>
        </div>

        {/* 4st project */}
        {/* <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/p4.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            SaaS Dashboard Development
          </h1>
          <h1 className="pt-2 font-medium text-white/80 ">Apps , UI/UX</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
