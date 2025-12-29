import Link from "next/link";
import Image from "next/image";

export function CSRSection() {
  return (
    <section 
      className="relative overflow-hidden py-8 md:py-16 px-4 md:px-6"
    >
      <div className="mx-auto flex justify-center w-full">
        <div 
          className="grid grid-cols-1 md:grid-cols-[7fr_5fr] items-center w-full max-w-[1300px]"
          style={{
            backgroundColor: "#D1EEF2",
            paddingTop: "clamp(32px, 4.3vw, 56px)",
            paddingRight: "clamp(24px, 5.5vw, 72px)",
            paddingBottom: "clamp(32px, 4.3vw, 56px)",
            paddingLeft: "clamp(24px, 5.5vw, 72px)",
            gap: "clamp(32px, 2vw, 116px)",
            borderRadius: "16px"
          }}
        >
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6" style={{ maxWidth: "633px" }}>
            <h2 
              style={{ 
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "clamp(1.75rem, 3.8vw, 2.2rem)",
                lineHeight: "115%",
                letterSpacing: "-1%",
                color: "#414141"
              }}
            >
              Corporate Social Responsibility
            </h2>
            
            <p 
              style={{ 
                fontFamily: "Montserrat",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#414141"
              }}
            >
              At Intellectway, our CSR initiative is designed to empower students, organizations, and changemakers. We actively support community-driven events, volunteer projects, student clubs, and entrepreneurial ventures amplifying ideas that create lasting social impact.
            </p>
            
            <Link
              href="/csr"
              className="inline-flex items-center justify-center rounded-full text-sm md:text-base font-medium text-white bg-[#17aac0] hover:bg-[#1292a6] transition w-full sm:w-auto"
              style={{ 
                paddingTop: "12px",
                paddingRight: "clamp(32px, 4vw, 48px)",
                paddingBottom: "12px",
                paddingLeft: "clamp(32px, 4vw, 48px)",
              }}
            >
              Get Involved
            </Link>
          </div>
          
          {/* Image */}
          <div className="hidden md:flex items-center justify-center w-full">
            <div className="relative w-full" style={{ maxWidth: "250px" }}>
              <Image
                src="/Images/csrImage.png"
                alt="Corporate Social Responsibility illustration"
                width={450}
                height={296}
                className="object-contain w-full h-auto"
                style={{ marginLeft: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
