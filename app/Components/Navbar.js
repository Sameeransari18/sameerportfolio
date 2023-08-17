import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <header className="text-gray-600 fixed bg-transparent shadow w-screen body-font z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#hero"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          >
            <img
              src="/Images/profile.jpg"
              alt="html"
              className="w-10 h-10 object-cover rounded-full "
            />
            <span className="ml-3 font-bold text-2xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-lg">
            <a
              href="#hero"
              className="mr-4  rounded relative group lg:text-light lg:dark:text-dark cursor-pointer"
            >
              Home
              <span
                className=" hover:text-purple-600 cursor-pointer
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
               w-0 lg:bg-light lg:dark:bg-dark
              "
              >
                &nbsp;
              </span>
            </a>
            <a
              href="#about"
              className="mr-5 hover:text-purple-600 cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="mr-5 hover:text-purple-600 cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#education"
              className="mr-5 hover:text-purple-600 cursor-pointer"
            >
              Education
            </a>
            <a
              href="#footer"
              className="mr-5 hover:text-purple-600 cursor-pointer"
            >
              Footer
            </a>
          </nav>
        </div>
      </header> */}

      <nav className="bg-white shadow z-50 py-2 fixed w-full">
        <div className="container px-6 py-3 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between pb-1">
              <a href="#hero" className="w-12 top-2 h-12 absolute ">
                <Image
                  src="/Images/html.svg"
                  alt="imgss"
                  layout="fill"
                  className="rounded-full cursor-pointer"
                />
              </a>

              <div className="flex lg:hidden w-full justify-end">
                <button
                  onClick={handleClick}
                  type="button"
                  className="text-black dark:text-black hover:text-gray-500 dark:hover:text-gray-500 focus:outline-none focus:text-black dark:focus:text-black"
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  mt-4 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between !justify-end`}
            >
              <div className="flex justify-end flex-col text-black capitalize dark:text-black lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <a
                  href="#hero"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  About Us
                </a>
                <a
                  href="#skills"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Skill
                </a>
                <a
                  href="#education"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Contact Me
                </a>

                {/* <div className="relative mt-4 lg:mt-0 lg:mx-4">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search />
                                </span>

                                <input
                                    type="text"
                                    className="w-full py-1 pl-10 pr-4 text-black placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-black focus:outline-none focus:border-gray-600"
                                    placeholder="Search"
                                />
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
