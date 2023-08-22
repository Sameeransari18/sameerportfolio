import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onClicked = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow z-50 py-2 fixed w-full">
        <div className="container px-6 py-3 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between pb-1">
              <a href="#hero" className="w-12 top-2 h-12 absolute ">
                <img
                  className="object-cover object-center rounded-full w-12 h-12 m-auto"
                  alt="hero"
                  src={"/ProfileImages/pic4.jpg"}
                  loading="lazy"
                />
              </a>

              <div className="flex lg:hidden mb-1 w-full justify-end">
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
                  ? "translate-x-0 opacity-100 border border-t-2 border-from-violet-500 to-fuchsia-500"
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  mt-4 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between !justify-end `}
            >
              <div className="flex justify-end flex-col text-black capitalize dark:text-black lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center font-medium">
                <a
                  href="#hero"
                  onClick={onClicked}
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={onClicked}
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  About Us
                </a>
                <a
                  href="#skills"
                  onClick={onClicked}
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Skill
                </a>
                <a
                  href="#experience"
                  onClick={onClicked}
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  onClick={onClicked}
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Education
                </a>
                <a
                  href="/Resume/Sameer_Backend_Resume.pdf"
                  target="_blank"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500 dark:hover:text-gray-500"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
