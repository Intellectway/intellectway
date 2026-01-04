import type { Metadata } from "next";
import { OpportunitiesForm } from "@/components/forms";
import { ColoredLetters } from "@/components/ui";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Explore how to collaborate with IntellectWay on new initiatives.",
};

export default function OpportunitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 xl:py-8 sm:py-22 lg:py-18">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 sm:py-12 mt-[100px] sm:mt-0">
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
                Opportunities
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
            Opportunities
          </h1>
          <p
            className="mx-auto max-w-4xl text-xl px-4"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 300,
              lineHeight: "150%",
              color: "#414141",
            }}
          >
            At intellectway, we’re always looking for motivated people to help us inspire and empower learners worldwide.
          </p>
        </div>

        <div className="relative overflow-visible">
          {/* Colored Letters - Left Side */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: "170px",
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

          <div className="relative z-10 mb-6 sm:mb-12 mt-3 sm:mt-0">
            <OpportunitiesForm />
          </div>

          {/* Colored Letters - Right Side */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: "180px",
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
              bottom: "-30px",
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

