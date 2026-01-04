"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ColoredLetters } from "@/components/ui";

type ServiceTab = "Students" | "Professional" | "Corporates";

const reasons = [
  {
    id: 1,
    title: "Team",
    description:
      "A diverse and highly qualified team with over 20 years of combined expertise in the global education sector passionate about guiding clients to success.",
    color: "bg-blue-100",
    backgroundColor: "#D1EEF2",
    numberColor: "#A2DDE6",
    numberTextColor: "#414141",
    icon: "/Why/Team.svg",
  },
  {
    id: 2,
    title: "Delivery",
    description:
      "We focus on delivering the right solutions not just quickly, but meaningfully. Our goal is long-term value, built on trust and results.",
    color: "bg-yellow-100",
    backgroundColor: "#FDF4D3",
    numberColor: "#FAE8A7",
    icon: "/Why/Delivery.svg",
  },
  {
    id: 3,
    title: "Need-Based Approach",
    description:
      "No two clients are the same. We take the time to listen, understand your goals, and tailor our solutions to meet your specific needs with clarity and precision.",
    color: "bg-green-100",
    backgroundColor: "#EBF6ED",
    numberColor: "#D7EEDC",
    icon: "/Why/Need-Based.svg",
  },
  {
    id: 4,
    title: "Accreditation",
    description:
      "We work closely with leading accreditation bodies across the U.S. and U.K. including ICEF Academy, NAFSA, and AIRC to align our clients with programs that meet global standards.",
    color: "bg-slate-200",
    backgroundColor: "#D2DAE1",
    numberColor: "#A5B4C3",
    icon: "/Why/Accreditation.svg",
  },
  {
    id: 5,
    title: "Research and Execution",
    description:
      "Grounded in the latest industry trends and insights, we collaborate with top institutions and experts to design practical, effective strategies for academic and professional advancement.",
    color: "bg-pink-100",
    backgroundColor: "#FFE2DF",
    numberColor: "#FFC5C0",
    icon: "/Why/Research.svg",
  },
  {
    id: 6,
    title: "Partnerships",
    description:
      "Our strength lies in our global network. We partner with top-tier academic and professional institutions worldwide to open doors and create lasting impact.",
    color: "bg-purple-100",
    backgroundColor: "#EFF0F9",
    numberColor: "#DFE1F3",
    icon: "/Why/Partberships.svg",
  },
];

const services: Record<
  ServiceTab,
  {
    heading: string;
    description: string;
    image: string;
    href: string;
  }
> = {
  Students: {
    heading: "Empower every student's journey, from language learning to career success",
    description:
      "Build strong English skills, gain admissions to top universities, prepare for tests, and shape your career with services designed to help you thrive, in the classroom and beyond.",
    image: "/Services/ServiceStudent.png",
    href: "/services/student",
  },
  Professional: {
    heading: "Advance your skills and grow your career with confidence",
    description:
      "Join specialized training, workshops, and networking opportunities designed to boost your professional development and expand your impact in any industry.",
    image: "/Services/ServiceProfessional.png",
    href: "/services/professional",
  },
  Corporates: {
    heading: "Empower your institution with trusted academic partnerships",
    description:
      "Strengthen your programs, gain international accreditation, and build strategic partnerships that foster growth, knowledge exchange, and global recognition.",
    image: "/Services/ServiceCorprote.png",
    href: "/services/corporate",
  },
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("Students");
  const tabs: ServiceTab[] = ["Students", "Professional", "Corporates"];
  const activeService = services[activeTab];

  return (
    <>
      <section className="relative overflow-hidden mt-10 p-8 lg:p-0">
        <div className="mx-auto w-full max-w-[90rem] relative" style={{ zIndex: 100 }}>
          {/* Header Section */}
          <header className="mb-8 md:mb-12 space-y-2 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our Services</h2>
            <p
              className="mx-auto max-w-3xl text-base leading-7 text-slate-600"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "130%",
                textAlign: "center",
              }}
            >
              intellectway delivers programs and services that empower students,
              professionals, and institutions worldwide.
            </p>
          </header>

          {/* Mobile View - All Cards Stacked */}
          <div className="md:hidden space-y-6">
            {tabs.map((tab) => {
              const service = services[tab];
              return (
                <div key={tab} className="space-y-4">
                  {/* Image */}
                  <div
                    className="relative overflow-hidden w-full aspect-[420/273] mx-auto"
                    style={{
                      borderRadius: "25px",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={tab}
                      fill
                      className="object-cover"
                      style={{ zIndex: 0 }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 w-full h-full"
                      style={{ zIndex: 1 }}
                    >
                      <Image
                        src="/Images/ImagePattern.png"
                        alt="Pattern overlay"
                        fill
                        className="object-cover"
                        style={{
                          objectPosition: 'bottom center',
                          transform: 'rotate(180deg)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center space-y-4">
                    <h3
                      className="text-slate-900"
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "clamp(18px, 4vw, 24px)",
                        lineHeight: "100%",
                        verticalAlign: "middle",
                      }}
                    >
                      {service.heading}
                    </h3>
                    <p
                      className="text-slate-600"
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 300,
                        fontSize: "clamp(16px, 3vw, 20px)",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                      }}
                    >
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-medium text-[#17aac0] transition-colors w-fit"
                    >
                      <span
                        className="hover:bg-[#D1EEF2] py-2 px-[16px]"
                        style={{ borderRadius: "25px" }}
                      >
                        Explore {tab.toLowerCase()} services
                        <span className="hover:bg-[#D1EEF2]">  &gt;</span>
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View - Navigation Tabs */}
          <div className="hidden md:block">
            {/* Navigation Tabs */}
            <div className="mb-6 md:mb-8 flex justify-center">
              <div
                className="flex flex-row items-end w-full max-w-[1200px]"
                style={{
                  minHeight: "40px",
                  borderRadius: "12px",
                }}
              >
                {tabs.map((tab, index) => {
                  const isActive = activeTab === tab;
                  const isFirst = index === 0;
                  const isLast = index === tabs.length - 1;

                  // Determine rounded corners based on tab position when active or hovered
                  let roundedClasses = "";
                  if (tab === "Students") {
                    roundedClasses = "rounded-tl-lg rounded-bl-lg";
                  } else if (tab === "Professional") {
                    roundedClasses = "";
                  } else if (tab === "Corporates") {
                    roundedClasses = "rounded-tr-lg rounded-br-lg";
                  }

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        width: "330px",
                        height: "40px",
                        padding: "8px",
                        borderBottomWidth: "2px",
                        borderBottomStyle: "solid",
                        borderBottomColor: isActive ? "transparent" : "#94a3b8",
                      }}
                      className={`
                      relative text-base font-medium transition-colors flex items-center justify-center flex-1
                      ${isActive
                          ? `${roundedClasses} bg-slate-700 text-white z-10`
                          : `text-slate-700 bg-transparent hover:bg-slate-700 hover:text-white hover:z-10 ${roundedClasses}`
                        }
                    `}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderBottomColor = "transparent";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderBottomColor = "#94a3b8";
                        }
                      }}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto grid gap-0 lg:grid-cols-2 w-full max-w-[1200px]">
              {/* Image on Left */}
              <div
                className="relative overflow-hidden w-full aspect-[420/273] max-w-[520px] mx-auto lg:mx-0"
                style={{
                  borderRadius: "25px",
                }}
              >
                <Image
                  src={activeService.image}
                  alt={activeTab}
                  fill
                  className="object-cover"
                  style={{ zIndex: 0 }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 w-full"
                  style={{ zIndex: 1, height: "50%" }}
                >
                  <Image
                    src="/Images/ImagePattern.png"
                    alt="Pattern overlay"
                    fill
                    className="object-cover"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* Text Content on Right */}
              <div className="flex flex-col justify-center space-y-4 md:space-y-6 mt-6 lg:mt-0">
                <h3
                  className="text-slate-900"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "clamp(18px, 4vw, 24px)",
                    lineHeight: "100%",
                    verticalAlign: "middle",
                  }}
                >
                  {activeService.heading}
                </h3>
                <p
                  className="text-slate-600"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                    fontSize: "clamp(12px, 3.5vw, 22px)",
                    lineHeight: "130%",
                    letterSpacing: "0%",
                  }}
                >
                  {activeService.description}
                </p>
                <Link
                  href={activeService.href}
                  className="inline-flex items-center font-medium text-[#17aac0] transition-colors w-fit"
                >
                  <span
                    className="hover:bg-[#D1EEF2] py-2 px-[16px]"
                    style={{ borderRadius: "25px" }}
                  >
                    Explore {activeTab.toLowerCase()} services
                    <span className="hover:bg-[#D1EEF2]">  &gt;</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 relative overflow-hidden" style={{ zIndex: 100 }}>
          <div className="mx-auto max-w-7xl">
            <header className="mb-12 space-y-4 text-center">
              <h2 className="text-2xl font-semibold text-slate-900">Why intellectway</h2>
              <p className="mx-auto max-w-4xl text-lg leading-7 text-slate-600">
                Our advising team delivers a personalized, high-touch experience rooted in
                professionalism, cultural understanding, and a commitment to excellence. Every
                client engagement is guided by a structured approach designed to ensure clarity,
                efficiency, and meaningful results.
              </p>
            </header>

            <div
              className="grid gap-4 md:gap-8 justify-center mx-auto max-w-7xl"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 400px))",
              }}
            >
              {reasons.map((reason) => (
                <article
                  key={reason.id}
                  className={`relative ${reason.backgroundColor ? "" : reason.color} border border-slate-200 w-full max-w-[400px]`}
                  style={{
                    minHeight: "280px",
                    borderRadius: "16px",
                    padding: "clamp(20px, 4vw, 32px)",
                    boxShadow: "0px 2px 4px 0px #41414166",
                    backgroundColor: reason.backgroundColor || undefined,
                  }}
                >
                  {/* Number Badge */}
                  <div
                    className={`absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full ${typeof reason.numberColor === "string" && reason.numberColor.startsWith("#")
                      ? ""
                      : reason.numberColor
                      }`}
                    style={{
                      backgroundColor: typeof reason.numberColor === "string" && reason.numberColor.startsWith("#")
                        ? reason.numberColor
                        : undefined,
                      color: reason.numberTextColor || "#414141",
                      fontFamily: "Montserrat",
                      fontWeight: 300,
                      fontSize: "28px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      verticalAlign: "middle",
                      width: "38px",
                      height: "38px",
                    }}
                  >
                    {reason.id}
                  </div>

                  {/* Icon */}
                  <div className="mb-3 md:mb-4 flex items-start">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold" style={{ color: "#414141" }}>
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      color: "#414141",
                      fontFamily: "Montserrat",
                      fontWeight: 300,
                      fontSize: "clamp(14px, 3vw, 17px)",
                      paddingBottom: "10px",
                    }}
                  >
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Colored Letters - Bottom Right */}
        <div
          className="show-above-1225 absolute"
          style={{
            top: "50px",
            right: "-5px",
            transform: "translateX(20%)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "block" }}>
            <ColoredLetters
              size="large"
              topLeftColor="#F8DD7B"
              topRightColor="#C3E5CA"
              bottomLeftColor="#F8DD7B"
              bottomRightColor="#C3E5CA"
            />
          </div>

          <div style={{ display: "block" }}>
            <ColoredLetters
              size="large"
              topLeftColor="#FFA9A0"
              topRightColor="#CFD2EE"
              bottomLeftColor="#FFA9A0"
              bottomRightColor="#CFD2EE"
            />
          </div>
        </div>

        {/* Colored Letters - Bottom Left */}
        <div
          className="show-above-1225 absolute"
          style={{
            top: "220px",
            left: "40px",
            transform: "translateX(-15%) scaleX(-1)",
          }}
        >
          <div style={{ display: "block" }}>
            <ColoredLetters
              size="large"
              topLeftColor="#F8DD7B"
              topRightColor="#C3E5CA"
              bottomLeftColor="#F8DD7B"
              bottomRightColor="#C3E5CA"
            />
          </div>

          <div style={{ display: "block" }}>
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
    </>
  );
}

