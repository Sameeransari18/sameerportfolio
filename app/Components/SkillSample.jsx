import React, { useState, useEffect } from "react";

const Skill = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTransform = (x, y, scaleFactor = 0.5) => {
    const baseX = -20;
    const baseY = 2;
    const newX = baseX + x * scaleFactor;
    const newY = baseY + y * scaleFactor;
    return `translateX(${newX}vw) translateY(${newY}vw) translateZ(0px)`;
  };

  return (
    <section id="skills" className="text-gray-600 body-font relative">
      <div className="container px-5 pb-8 py-16 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-4xl text-3xl font-black tracking-widest uppercase title-font xs:mb-16 text-gray-900">
            SKILLS
          </h1>
        </div>
        <div
          className="w-full h-full relative bg-circularLight dark:bg-circularDark grid items-center justify-center place-content-center md:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:flex mb-8 md:mb-16 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[40vh] sm:h-[30vh] xs:h-[50vh] skillsicon"
          style={{
            transform: `translateY(calc(-50% + ${scrollPosition * 0.1}px))`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {/* Your image divs */}
          <div className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2  place-content-center">
            <img
              src="/Images/netcore.svg"
              alt="netcore"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(60, -15),
            }}
          >
            <img
              src="/Images/nodejs.svg"
              alt="netcore"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center"
            style={{
              transform: calculateTransform(-20, -15),
            }}
          >
            <img
              src="/Images/html.svg"
              alt="html"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center"
            style={{
              transform: calculateTransform(-25, 13),
            }}
          >
            <img
              src="/Images/npm-square-red-1.svg"
              alt="npm-square-red-1"
              className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center"
            style={{
              transform: calculateTransform(-10, -1),
            }}
          >
            <img
              src="/Images/boomi.svg"
              alt="boomi"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(15, -10),
            }}
          >
            <img
              src="/Images/css.svg"
              alt="css"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(55, 15),
            }}
          >
            <img
              src="/Images/git-icon.svg"
              alt="git-icon"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(75, 3),
            }}
          >
            <img
              src="/Images/tailwind-css.svg"
              alt="tailwind-css"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(105, -1),
            }}
          >
            <img
              src="/Images/next-js.svg"
              alt="next-js"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(95, 15),
            }}
          >
            <img
              src="/Images/material-ui.svg"
              alt="material-ui"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(10, 12),
            }}
          >
            <img
              src="/Images/javascript.svg"
              alt="JavaScript"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
          <div
            className="cursor-pointer flex origin-center absolute skillsicon font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold place-content-center "
            style={{
              transform: calculateTransform(90, -15),
            }}
          >
            <img
              src="/Images/react.svg"
              alt="React"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md grayscale hover:grayscale-0 duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
