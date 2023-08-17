import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-gray-600 body-font bg-no-repeat  bg-cover h-screen  bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center absolute inset-0">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/5 mb-10 md:mb-0">
          <Image
            src={"/Images/css.svg"}
            alt="html"
            width={450}
            height={450}
            className="m-auto"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font md:text-3xl text-2xl mb-4 font-normal text-gray-900">
            Hi There! I'm
            {/* <br className="hidden lg:inline-block" /> */}
            <span className="text-white mx-3 md:text-4xl text-3xl font-medium">
              SAMEER
            </span>
          </h1>
          <div className="text-center mb-5 text-white text-lg md:text-2xl font-bold">
            I am
            <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden text-red-300">
              {/* <span className="animate-word col-span-full row-span-full  mx-2">
                Dotnet
              </span> */}
              <span className="animate-word-delay-1 col-span-full row-span-full mx-2">
                React
              </span>
              <span className="animate-word-delay-2 col-span-full row-span-full mx-2">
                Boomi
              </span>
              <span className="animate-word-delay-3 col-span-full row-span-full mx-2">
                Dotnet
              </span>
              {/* <span className="animate-word-delay-4 col-span-full row-span-full mx-2">
                VueJS
              </span> */}
            </div>
            Developer
          </div>
          <p className="mb-8 text-black leading-relaxed">
            I have developed a strong proficiency in HTML, CSS, Bootstrap,
            JavaScript, .Net Core MVC, .Net Core Web API, Node.js, and Git. I
            have proven myself to be both a valuable team player and a capable
            independent worker.
          </p>

          {/* <p className=" text-white">
            Want to hire me for work ping me{" "}
            <a className="underline" href="mailto:shabittajsameer786@gmail.com">
              mail here
            </a>
          </p> */}
        </div>
      </div>
    </section>
  );
}
