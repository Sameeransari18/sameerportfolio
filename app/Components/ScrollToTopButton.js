import { useEffect } from "react";

function ScrollToTopButton() {
  // Define the scrolltoTop function
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const topBtn = document.querySelector("#topButton");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        topBtn.classList.add("flex");
        topBtn.classList.remove("hidden");
      } else {
        topBtn.classList.remove("flex");
        topBtn.classList.add("hidden");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => scrolltoTop()}
      id="topButton"
      className="fixed bottom-5 right-5 z-10 animate-bounce rounded-full bg-gray-100 md:w-16 md:h-16 w-12 h-12 hidden justify-center items-center shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
