import React from "react";

export default function Experience() {
  return (
    <>
      <section id="experience" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl title-font mb-4 font-black text-gray-900 uppercase tracking-widest">
              Experience
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4 -my-8">
            <div className="py-10 px-4 lg:w-1/3 m-auto border rounded-2xl shadow-lg lg:mb-0 mb-5">
              <div className="h-full flex items-start">
                <div className="flex-shrink-0 w-16 h-16 mx-3 bg-purple-100 text-purple-500 rounded-full sm:inline-flex items-center justify-center m-auto hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 640 512"
                  >
                    <path d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z" />
                  </svg>
                </div>
                <div className="w-18 flex-shrink-0 flex flex-col text-center m-auto leading-none">
                  <span className="text-gray-500 pb-2 mb-2 text-sm border-b-2 border-gray-200">
                    Mar 2022
                  </span>
                  <span className="text-gray-500 pb-2 mb-2 text-sm border-gray-200">
                    May 2022
                  </span>
                </div>

                <div className="flex-grow pl-6 m-auto  font-mono">
                  <h1 className="title-font text-lg font-black  text-gray-900 ">
                    Web Developement Intern
                  </h1>
                  <p className="leading-relaxed mb-5">KaroStartUp</p>
                </div>
              </div>
            </div>

            <div className="py-10 px-4 lg:w-1/3 m-auto border rounded-2xl shadow-lg">
              <div className="h-full flex items-start">
                <div className="flex-shrink-0 w-16 h-16 mx-3 bg-purple-100 text-purple-500 rounded-full sm:inline-flex items-center justify-center m-auto hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                  </svg>
                </div>
                <div className="w-18 flex-shrink-0 flex flex-col text-center m-auto  leading-none">
                  <span className="text-gray-500 pb-2 mb-2 text-sm border-b-2 border-gray-200">
                    Jul 2022
                  </span>
                  <span className="text-gray-500 pb-2 mb-2 text-sm border-gray-200">
                    Present
                  </span>
                </div>

                <div className="flex-grow pl-6 m-auto  font-mono">
                  <h1 className="title-font text-lg font-black  text-gray-900 ">
                    Software Engineer Trainee
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Zydni Software Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
