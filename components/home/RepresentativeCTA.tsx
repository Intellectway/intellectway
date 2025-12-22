import Link from "next/link";
import Image from "next/image";

export function RepresentativeCTA() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6" style={{ backgroundColor: "#D1EEF2", minHeight: "365px", height: "auto", paddingTop: "clamp(2rem, 5vw, 3rem)", paddingBottom: "clamp(2rem, 5vw, 3rem)" }}>
      {/* Pattern Image - Top */}
      <div className="hidden md:block absolute bottom-0 right-0 z-10 translate-x-[-15%] translate-y-[-15%] rotate-[0deg] scale-125">
        <Image
          src="/Images/iPattern.png"
          alt="Pattern decoration"
          width={300}
          height={300}
        />
      </div>

      <div className="relative h-full mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 text-center" style={{ maxWidth: "829px" }}>
        <h2 
          style={{ 
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            lineHeight: "100%",
            letterSpacing: "-2%",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#414141"
          }}
        >
          Be Our Representative
        </h2>
        
        <p 
          className="max-w-3xl w-full"
          style={{ 
            fontFamily: "Montserrat",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            lineHeight: "150%",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#414141"
          }}
        >
          Join Intellectway as an official representative of your university and play a key role in connecting, guiding, and empowering future students on their academic journey. Help us expand our global impact by serving as a trusted link between institutions and motivated learners.
        </p>
        
        <Link
          href="/represent-us"
          className="inline-flex items-center rounded-full px-9 py-2 text-sm md:text-base font-medium text-white transition hover:opacity-90"
          style={{ 
            backgroundColor: '#17aac0',
          }}
        >
          Apply to Represent Us
        </Link>
        
        <p 
          className="max-w-[989px] w-full"
          style={{ 
            fontFamily: "Montserrat",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            lineHeight: "150%",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#414141"
          }}
        >
          Fill out our brief application form — a member of our team will be in touch shortly.
        </p>
      </div>
      
      {/* Pattern Image - Bottom */}
      <div className="hidden md:block absolute bottom-0 left-0 z-10 translate-x-[15%] translate-y-[-10%] rotate-[180deg] scale-125">
        <Image
          src="/Images/iPattern.png"
          alt="Pattern decoration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
