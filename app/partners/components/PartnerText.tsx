import Link from "next/link";

export function PartnerText() {
  return (
    <div className="space-y-8 text-center">
        <h2 
          className="text-3xl text-center"
          style={{ 
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "1.875rem",
            lineHeight: "100%",
            letterSpacing: "-2%",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#414141"
          }}
        >
          Why to Become a Partner
        </h2>
        <p 
          className="mx-auto text-base text-center"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 300,
            fontSize: "1.25rem",
            lineHeight: "150%",
            letterSpacing: "0%",
            verticalAlign: "middle",
            color: "#666666"
          }}
        >
          intellectway provides training and educational solutions for motivated individuals from the Middle East and North Africa aiming to advance their academic and career paths in the US, UK, and beyond. Our inclusive team builds intercultural connections and supports students, professionals, and institutions with tailored services and smooth transitions for future success.
        </p>
      
      <div className="flex items-center justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#27B3C8] px-8 py-3 font-['Montserrat'] text-base font-medium text-white transition hover:bg-[#1da2b7]"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}

