import React from "react";
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" text-pink-600   ">
      {backToTopButton && (
        <button
          className=" fixed w-50 h-50 right-12 z-50 bottom-12 border-2 rounded-lg border-pink-600 "
          onClick={scrollUp}
        >
          <HiArrowUp className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
