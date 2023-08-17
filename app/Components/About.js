import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-gray-900 uppercase ">
              BIOGRAPHY
            </h1>
            <p className="mb-4 lg:text-lg text-sm leading-relaxed">
              I have one year of experience in back-end development, during
              which I have developed a strong proficiency in HTML, CSS,
              Bootstrap, JavaScript, .Net Core MVC, .Net Core Web API, Node.js,
              and Git.
            </p>
            <p className="mb-4 lg:text-lg text-sm leading-relaxed">
              I have proven myself to be both a valuable team player and a
              capable independent worker. I possess the ability to quickly adapt
              to new technologies and work environments, and my strong work
              ethic and ability to collaborate with diverse teams are
              well-regarded.
            </p>
            <p className="mb-4 lg:text-lg text-sm leading-relaxed">
              Additionally, I am known for my exceptional problem-solving,
              decision-making, and communication skills. With my solid technical
              knowledge and a talent for quickly learning new tools, I am
              confident in my ability to make significant contributions to any
              project or organization.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/5">
            <img
              className="object-cover object-center rounded md:h-3/4 md:w-3/4 w-30 h-30"
              alt="hero"
              src={"/Images/html.svg"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
