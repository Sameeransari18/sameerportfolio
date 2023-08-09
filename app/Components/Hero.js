import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-gray-600 body-font bg-no-repeat  bg-cover h-screen  bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center absolute inset-0">
        <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
              src={"/Images/html.svg"}
              alt="HTML"
              width={450}
              height={450}
              className="m-auto"
            />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {/* Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten */}
            Turning Vision Into Reality <br />
            With Code And Design.
          </h1>
          <p className="mb-8 leading-relaxed">
            I have developed a strong proficiency in HTML, CSS, Bootstrap,
            JavaScript, .Net Core MVC, .Net Core Web API, Node.js, and Git. I
            have proven myself to be both a valuable team player and a capable
            independent worker.
          </p>
        </div>
      </div>
    </section>
  );
}
