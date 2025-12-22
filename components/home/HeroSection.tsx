"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Slide = {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/Sliders/1.png",
    title: "Grow with intellectway, Strengthen Your Institution",
    description: "Partner with us to expand your institution's global reach through tailored programs, strategic guidance, and dedicated support. We help you enhance your international presence and deliver greater value to your students and stakeholders.",
    buttonText: "Book Your Consultation >",
    buttonLink: "/contact",
  },
  {
    id: 2,
    image: "/Sliders/2.png",
    title: "Begin Your Global Education Journey.",
    description: "Explore world-class opportunities through scholarships, exchange programs, and strategic partnerships designed to expand your academic and professional horizons.",
    buttonText: "Apply for Admission >",
    buttonLink: "/contact",
  },
  {
    id: 3,
    image: "/Sliders/3.png",
    title: "Your Bridge from Education to Global Impact",
    description: "Empowering your journey from international study to meaningful career success with expert guidance, strategic support, and global opportunities at every step.",
    buttonText: "Get Started Now >",
    buttonLink: "/contact",
  },
  {
    id: 4,
    image: "/Sliders/4.jpg",
    title: "Corporate Social Responsibility",
    description: "At Intellectway, our CSR initiative is committed to empowering student-led initiatives, community projects, volunteer programs, campus organizations, and entrepreneurial ventures. We invest in ideas that drive positive impact and support the next generation of changemakers.",
    buttonText: "Apply Now >",
    buttonLink: "/contact",
  },
];

const PATTERN_ROWS = Array.from({ length: 6 }, (_, idx) => idx + 1);

const getPatternColor = (row: number) =>
  row % 2 === 0 ? "rgba(23, 170, 192, 0.1)" : "rgba(34, 197, 94, 0.1)";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [useDissolve, setUseDissolve] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      const nextSlide = (currentSlide + 1) % slides.length;
      // Check if transitioning from last slide to first slide
      const isLastToFirst = currentSlide === slides.length - 1 && nextSlide === 0;
      setUseDissolve(isLastToFirst);
      setDirection("right");
      setTimeout(() => {
        setCurrentSlide(nextSlide);
        setTimeout(() => {
          setIsAnimating(false);
          setUseDissolve(false);
        }, 50);
      }, 1000);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      // Check if transitioning from last slide to first slide
      const isLastToFirst = currentSlide === slides.length - 1 && index === 0;
      setUseDissolve(isLastToFirst);
      setDirection(index > currentSlide ? "right" : "left");
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => {
          setIsAnimating(false);
          setUseDissolve(false);
        }, 50);
      }, 1000);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ height: '80vh' }}>
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const slideOffset = index - currentSlide;
        
        // Calculate translateX for smooth slide animation with no gaps
        let translateX = 100; // Default: off-screen to the right
        let opacity = 1; // Default opacity
        
        // Calculate next and previous slide indices
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        const prevSlideIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        
        // If using dissolve transition (last to first), use opacity instead of translateX
        if (useDissolve && isAnimating) {
          translateX = 0; // Keep slides at same position
          // Last slide (index 3) fades out, first slide (index 0) fades in
          if (index === slides.length - 1) {
            opacity = 0; // Last slide fades out
          } else if (index === 0) {
            opacity = 1; // First slide fades in
          } else {
            opacity = 0; // Other slides hidden
          }
        } else if (isActive && !isAnimating) {
          translateX = 0; // Active slide when not animating
          opacity = 1;
        } else if (!isAnimating) {
          // Pre-position next/prev slides at 0% behind current to prevent gaps
          if (index === nextSlideIndex || index === prevSlideIndex) {
            translateX = 0; // Next/prev slide ready at 0% behind current
            opacity = 0;
          } else {
            translateX = 100; // Other slides off-screen
            opacity = 0;
          }
        } else if (isAnimating && direction === "right") {
          // Sliding right: current goes left, next (already at 0%) becomes visible
          if (slideOffset === 0) {
            translateX = -100; // Current slide moving out to left
            opacity = 1;
          } else if (slideOffset === 1) {
            translateX = 0; // Next slide already at 0%, becomes visible
            opacity = 1;
          } else {
            translateX = slideOffset > 0 ? 100 : -100;
            opacity = 0;
          }
        } else if (isAnimating && direction === "left") {
          // Sliding left: current goes right, previous (already at 0%) becomes visible
          if (slideOffset === 0) {
            translateX = 100; // Current slide moving out to right
            opacity = 1;
          } else if (slideOffset === -1) {
            translateX = 0; // Previous slide already at 0%, becomes visible
            opacity = 1;
          } else {
            translateX = slideOffset < 0 ? -100 : 100;
            opacity = 0;
          }
        } else {
          translateX = isActive ? 0 : 100;
          opacity = isActive ? 1 : 0;
        }

        return (
        <div
          key={slide.id}
          className={`absolute inset-0 ${
            useDissolve 
              ? "transition-opacity duration-[1000ms] ease-in-out" 
              : "transition-transform duration-[1000ms] ease-in-out"
          } ${
            isActive 
              ? "z-10" 
              : (index === nextSlideIndex || index === prevSlideIndex) 
                ? "z-5" 
                : "z-0"
          }`}
          style={{ 
            transform: `translateX(${translateX}%)`,
            opacity: opacity
          }}
        >
          {/* Background Image - Full Width */}
          <div
            className="absolute inset-0 bg-cover bg-[50%_20%] bg-no-repeat"
            style={{
              backgroundImage: slide.image
                ? `url(${slide.image})`
                : "none",
            }}
          />

          {/* Gradient Overlay - Primary to Transparent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#17aac0]/50 to-transparent z-10"></div>

          {/* Content on Left Side */}
          <div className="relative z-20 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
              <div className="max-w-3xl">
                <h1
                  className={`mb-6 text-xl font-bold leading-tight text-white transition-all duration-[1200ms] ease-out sm:text-4xl lg:text-5xl ${
                    index === currentSlide && !isAnimating
                      ? "translate-y-0 opacity-100 delay-0"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`mb-8 max-w-2xl text-base leading-7 text-white/90 transition-all duration-[1200ms] ease-out sm:text-lg ${
                    index === currentSlide && !isAnimating
                      ? "translate-y-0 opacity-100 delay-200"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className={`inline-block text-white transition-all duration-[1200ms] ease-out hover:bg-[#1292a6] ${
                    index === currentSlide && !isAnimating
                      ? "translate-y-0 opacity-100 delay-400"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "20px",
                    lineHeight: "130%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    width: "auto",
                    height: "48px",
                    gap: "8px",
                    borderRadius: "32px",
                    paddingRight: "32px",
                    paddingLeft: "32px",
                    backgroundColor: "#17AAC0",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
        );
      })}

      {/* Decorative Pattern - Bottom Right */}
      <div 
        className={`absolute bottom-20 right-16 z-20 transition-all duration-[1200ms] ease-out ${
          !isAnimating
            ? "opacity-100 delay-0"
            : "opacity-0"
        }`}
        style={{ 
          transform: `translateX(35%) translateY(${!isAnimating ? '40%' : 'calc(20% + 2rem)'}) rotate(-35deg)`
        }}
      >
        <div className="flex flex-col gap-6">
          {PATTERN_ROWS.map((row) => {
            const color = getPatternColor(row);
            return (
              <div
                key={`pattern-row-${row}`}
                className="flex items-center justify-center gap-5 w-full"
              >
                {Array.from({ length: row }).map((_, shapeIndex) => (
                  <div
                    key={`pattern-segment-${row}-${shapeIndex}`}
                    className="flex items-center gap-5"
                  >
                    <div
                      className="flex-shrink-0"
                      style={{
                        backgroundColor: color,
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: color,
                        height: "2rem",
                        width: "8rem",
                        borderRadius: "0",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Navigation with Counter */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
