import Image from "next/image";
import React from "react";

export default function Skill() {
  return (
    <>
      <section
        id="skills"
        className="text-gray-600 body-font bg-no-repeat bg-auto h-100%  bg-gradient-to-r from-fuchsia-500 to-violet-500"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-extrabold text-gray-900">
              SKILLS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/html.svg"}
                alt="HTML"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
                loading="lazy"
              />

            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/css.svg"}
                alt="css"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
              />
            </div>

            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/tailwind-css.svg"}
                alt="tailwindcss"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
              />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/javascript.svg"}
                alt="js"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
              />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/git-icon.svg"}
                alt="git"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
              />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/angular.svg"}
                alt="Angular"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
              />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/react.svg"}
                alt="react"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
              />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image
                src={"/Images/next-js.svg"}
                alt="next-js"
                width={64}
                height={64}
                className="m-auto transition ease-in-out delay-150 grayscale hover:-translate-y-1 hover:scale-110 hover:grayscale-0 duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
