import Image from "next/image";
import React from "react";

export default function Skill() {
  return (
    <>
      <section
        id="skills"
        className="text-gray-600 body-font bg-no-repeat bg-auto h-100%  bg-gradient-to-r from-fuchsia-500 to-violet-500 "
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-extrabold text-gray-900">
              SKILLS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/html.svg"
                  alt="html"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/css.svg"
                  alt="css"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>

            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/tailwind-css.svg"
                  alt="tailwind-css"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/javascript.svg"
                  alt="javascript"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/git-icon.svg"
                  alt="git-icon"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/angular.svg"
                  alt="angular"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/react.svg"
                  alt="react"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/next-js.svg"
                  alt="next-js"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div>
        <div className="md:container mx-auto flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2">
            <p className="text-lg mb-10 uppercase tracking-widest text-purple-600 font-black">
              Skills
            </p>
            <div className="flex sm:flex-col md:flex-row">
              <div className="flex flex-col gap-y-4">
                <p className="text-3xl mb-3 tracking-widest text-center md:text-left md:text-3xl font-light md:font-bold">
                  A modern tech stack integration
                </p>
                <p className="text-lg text-darkGrayishBlue leading-8 text-justify tracking-normal">
                  Web development is evolving at a breakneck speed every passing
                  year. I discover regularly to explore new ways of innovation
                  to foresee these changes and quickly adapt to the latest
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-0 m-0 h-96 relative flex items-center justify-center">
            {icons.map((icon, index) => (
              <div className="flex flex-col gap-y-4" key={index}>
                <img
                  className="icon scale-25 md:scale-50"
                  src={icon.iconSrc}
                  alt={icon.altText}
                />
                <p className="text-lg text-darkGrayishBlue leading-8 text-justify tracking-normal">
                  {icon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
