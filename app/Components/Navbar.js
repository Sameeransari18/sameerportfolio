import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 fixed bg-transparent shadow w-screen body-font z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="/Images/profile.jpg"
              alt="html"
              className="w-10 h-10 object-cover rounded-full "
            />
            {/* <Image
              src={"/Images/html.svg"}
              alt="html"
              width={20}
              height={20}
              className="m-auto"
            /> */}
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
      </header>
    </>
  );
}
