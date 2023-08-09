import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Head from "next/head";
import Skill from "./Components/Skill";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sameer</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Footer />
    </>
  );
}
