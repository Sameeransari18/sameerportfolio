import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [percent, setPercent] = useState(0);
  const circumference = 30 * 2 * Math.PI;

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setPercent(Math.round((winScroll / height) * 100));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 !z-50" x-data="scrollProgress()">
      <div className="h-2 bg-blue-500" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ScrollProgress;
