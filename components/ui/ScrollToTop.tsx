"use client";

import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get HeroSection height (80vh) + header height
      const headerHeight = 10; // Approximate header height
      const heroHeight = window.innerHeight * 0.1; // 80vh
      const totalHeroHeight = heroHeight + headerHeight;
      const scrollPosition = window.scrollY;

      // Show button when scrolled past the end of HeroSection (start of AboutUs section)
      setIsVisible(scrollPosition >= totalHeroHeight);
    };

    // Check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed scroll-to-top-btn z-[999] flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: "#4B6987",
      }}
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

