"use client";

import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";

import Skill from "./Components/Skill";
import Education from "./Components/Education";
import ScrollProgress from "./Components/ScrollProgress";
import ScrollToTopButton  from "./Components/ScrollToTopButton";
import Experience from "./Components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Education />
      <Experience />
      <Footer />
      <ScrollProgress />
      <ScrollToTopButton />

      {/* <Navbar />
      <div class="relative">
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
          <Hero />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
          <About />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-no-repeat bg-auto h-100%  bg-gradient-to-r from-fuchsia-500 to-violet-500">
          <Skill />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
          <Education />
        </div>
      </div>
      <Footer /> */}
    </>
  );
}
