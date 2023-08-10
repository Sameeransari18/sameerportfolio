import React from "react";

export default function Education() {
  return (
    <>
      {/* <!-- component --> */}
      <div id="education" className="container  px-5 py-24 mx-auto w-full">
        <div className="flex flex-col text-center w-full mb-20">
          <h3 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-extrabold text-gray-900">
            Education
          </h3>
        </div>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-purple-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-2xl mb-1">Higher Secondary</h3>
              <h6 className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
                Princess Matric. Higher Secondary School | 2017
              </h6>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-purple-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-500 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-purple-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-500 shadow"></div>
            </div>
            <div className="bg-purple-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-2xl mb-1">
                Bachelorette in Computer Science
              </h3>
              <h6 className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
                The New College (Autonomous) | 2019-202
              </h6>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-purple-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-2xl mb-1">
                Master's in Computer Application
              </h3>
              <h6 className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
                SRM University | 2022-2024
              </h6>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-purple-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-500 shadow"></div>
            </div>
          </div>
          {/* <!-- left --> */}
          {/* <div className="flex   md:contents">
            <div className="bg-purple-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md ">
              <h3 className="font-semibold text-2xl mb-1">SRM University</h3>
              <p className="leading-relaxed text-justify">2022 - 2024</p>
              <p className="leading-relaxed text-justify">2022 - 2024</p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-purple-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-500 shadow"></div>
            </div>
          </div> */}

          {/* <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-purple-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-500 shadow"></div>
            </div>
            <div className="bg-purple-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-2xl mb-1">Lorem ipsum</h3>
              <p className="leading-relaxed text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
                facilis.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
