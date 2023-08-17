import Image from "next/image";
import React from "react";

export default function Skill() {
  return (
    <>
      <section id="skills" className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-black tracking-widest uppercase title-font mb-4 text-gray-900">
              SKILLS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/netcore.svg"
                  alt="netcore"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/nodejs.svg"
                  alt="nodejs"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/boomi.svg"
                  alt="boomi"
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
                  src="/Images/npm-square-red-1.svg"
                  alt="npm-square-red-1"
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
            <div className="p-4 sm:w-1/4 w-1/2 relative">
              <div className="w-20 h-20 mx-auto transition-transform ease-in-out delay-150 transform-gpu hover:-translate-y-1 hover:scale-110">
                <img
                  src="/Images/material-ui.svg"
                  alt="material-ui"
                  className="w-full h-full object-contain rounded-md grayscale hover:grayscale-0 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
