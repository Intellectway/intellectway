import type { Metadata } from "next";
import { ColoredLetters } from "@/components/ui";
import { RepresentUsForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Represent Us",
  description:
    "Join IntellectWay as a representative to champion learning and impact in your community.",
};

export default function RepresentUsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 xl:py-8 sm:py-22 lg:py-18">
    <section className="mx-auto max-w-6xl px-4 sm:px-6 sm:py-12 mt-[80px] sm:mt-0">
      <div className="space-y-4 sm:space-y-6 text-center mb-8 sm:mb-12 mt-0">
        <div className="relative z-10 flex h-full justify-center">
          <p className="text-xs sm:text-sm">
            <span
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: "130%",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              Home /
            </span>{" "}
            <span
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "0.875rem",
                lineHeight: "100%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                color: "#414141",
              }}
            >
              Represent Us
            </span>
          </p>
        </div>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            lineHeight: "100%",
            letterSpacing: "-2%",
            verticalAlign: "middle",
            color: "#414141",
          }}
        >
          Represent Us
        </h1>
        <p
          className="mx-auto max-w-4xl text-sm sm:text-base px-4"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 300,
            lineHeight: "150%",
            color: "#414141",
          }}
        >
        Join Intellectway as an official representative for your university, connect, guide, and inspire others on their learning journey. Help us expand our global impact by serving as a trusted link between institutions and motivated learners.        </p>
      </div>

      <div className="relative overflow-visible">
        {/* Colored Letters - Left Side */}
        <div
          className="hidden lg:block absolute"
          style={{
            left: "-200px",
            transform: "translateY(-50%) scaleX(-1)",
            zIndex: 0,
          }}
        >
          <ColoredLetters  
            size="large"
            topLeftColor="#F8DD7B"
            topRightColor="#C3E5CA"
            bottomLeftColor="#F8DD7B"
            bottomRightColor="#C3E5CA"
          />
        </div>

        <div
          className="hidden lg:block absolute"
          style={{
            bottom: "0px",
            left: "-200px",
            transform: "translateY(-28%) scaleX(-1)",
            zIndex: 0,
          }}
        >
          <ColoredLetters  
            size="large"
            topLeftColor="#FFA9A0"
            topRightColor="#CFD2EE"
            bottomLeftColor="#FFA9A0"
            bottomRightColor="#CFD2EE"
          />
        </div>

        <div className="relative z-10">
          <RepresentUsForm />
        </div>

        {/* Colored Letters - Right Side */}
        <div
          className="hidden lg:block absolute"
          style={{
            top: "10px",
            right: "-200px",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        >
          <ColoredLetters 
            size="large"
            topLeftColor="#F8DD7B"
            topRightColor="#C3E5CA"
            bottomLeftColor="#F8DD7B"
            bottomRightColor="#C3E5CA"
          />
        </div>

        <div
          className="hidden lg:block absolute"
          style={{
            bottom: "-90px",
            right: "-200px",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        >
          <ColoredLetters 
            size="large"
            topLeftColor="#FFA9A0"
            topRightColor="#CFD2EE"
            bottomLeftColor="#FFA9A0"
            bottomRightColor="#CFD2EE"
          />
        </div>
      </div>
    </section>
  </main>
  );
}

