import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="#hero"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image
              src={"/Images/html.svg"}
              alt="HTML"
              width={20}
              height={20}
              className="m-auto "
            />
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 SAMEER —
            <a
              href="mailto:shabittajsameer@gmail.com"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              shabittajsameer786@gmail.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500"></a>
            <a className="ml-3 text-gray-500"> </a>
            <a className="ml-3 text-gray-500"></a>
            <a className="ml-3 text-gray-500"></a>
          </span>
        </div>
      </footer>
    </>
  );
}
