"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show and hide scroll  to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = (): void => {
    const duration = 4000;
    const start = window.scrollY;
    const startTime = performance.now();

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const scroll = (currentTime: number): void => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeOutCubic(progress);
      window.scrollTo(0, start * (1 - easeProgress));
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

 
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          className="bg-blue-950/60 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
          onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
