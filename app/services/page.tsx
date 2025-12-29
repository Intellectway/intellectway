"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ParallaxSection } from "@/components/ui";

type ServiceTab = "Students" | "Professional" | "Corporates";

type ServiceSection = 
  | "Language & Test Preperation"
  | "Career Development & Practical Training"
  | "Academic & Admissions Services"
  | "Logistics & Living Arrangements"
  | "Visa & Immigration Services"
  | "Training & Executive Education"
  | "Conferences, Workshops & Guest Speakers"
  | "Corporate Learning & Development"
  | "Professional Certifications"
  | "Consulting & Advisory Services"
  | "Academic & Faculty Development"
  | "International Scholarship Program Support"
  | "Accreditation Consulting"
  | "Exchange & Collaboration Programs"
  | "Talent & Faculty Mobility Programs"
  | "Custom Training Solutions";

const serviceData: Record<ServiceTab, {
  sections: ServiceSection[];
  content: Partial<Record<ServiceSection, {
    title: string;
    image?: string;
    description: string;
  }>>;
}> = {
  Students: {
    sections: [
      "Career Development & Practical Training",
      "Academic & Admissions Services",
      "Logistics & Living Arrangements",
      "Visa & Immigration Services",
      "Language & Test Preperation",
    ],
    content: {
      "Language & Test Preperation": {
        title: "Language & Test Preperation",
        image: "/Services/Student1.jpg",
        description: "We facilitate enrollment in top ESL/EFL institutes across the U.S. and U.K., and offer expert- led, in-person and online preparation for standardized exams including the ACT, SAT, GMAT, GRE, LSAT, MCAT, TOEFL, IELTS, and more.",
      },
      "Career Development & Practical Training": {
        title: "Career Development & Practical Training",
        image: "/Services/Student2.png",
        description: "Comprehensive career guidance and practical training opportunities to help students build professional skills and secure meaningful work experiences.",
      },
      "Academic & Admissions Services": {
        title: "Academic & Admissions Services",
        image: "/Services/Student3.jpg",
        description: "Expert guidance through the entire admissions process, from program selection to application submission, ensuring students find the right fit for their academic goals.",
      },
      "Logistics & Living Arrangements": {
        title: "Logistics & Living Arrangements",
        image: "/Services/Student4.png",
        description: "Comprehensive support for all practical aspects of student life abroad, from housing to health insurance and daily living essentials.",
      },
      "Visa & Immigration Services": {
        title: "Visa & Immigration Services",
        image: "/Services/Student5.jpg",
        description: "End-to-end visa and immigration support to ensure smooth transitions and compliance throughout the student's academic journey.",
      },
    },
  },
  Professional: {
    sections: [
      "Training & Executive Education",
      "Conferences, Workshops & Guest Speakers",
      "Corporate Learning & Development",
      "Professional Certifications",
      "Consulting & Advisory Services",
    ],
    content: {
      "Training & Executive Education": {
        title: "Training & Executive Education",
        image: "/Services/Prof1.jpg",
        description: "Specialized training programs designed to enhance leadership capabilities, strategic thinking, and professional excellence across industries.",
      },
      "Conferences, Workshops & Guest Speakers": {
        title: "Conferences, Workshops & Guest Speakers",
        image: "/Services/Prof2.jpeg",
        description: "Access to industry-leading conferences, specialized workshops, and expert speakers to expand professional networks and knowledge.",
      },
      "Corporate Learning & Development": {
        title: "Corporate Learning & Development",
        image: "/Services/Prof3.jpg",
        description: "Tailored learning solutions that align with organizational goals and drive workforce development and performance.",
      },
      "Professional Certifications": {
        title: "Professional Certifications",
        image: "/Services/Prof4.png",
        description: "Guidance and support for obtaining internationally recognized professional certifications that advance careers and enhance credibility.",
      },
      "Consulting & Advisory Services": {
        title: "Consulting & Advisory Services",
        image: "/Services/Prof5.jpg",
        description: "Strategic consulting services to help organizations design programs, develop talent, and achieve institutional excellence.",
      },
    },
  },
  Corporates: {
    sections: [
      "Academic & Faculty Development",
      "Exchange & Collaboration Programs",
      "Talent & Faculty Mobility Programs",
      "International Scholarship Program Support",
      "Custom Training Solutions",
      "Accreditation Consulting",
    ],
    content: {
      "Academic & Faculty Development": {
        title: "Academic & Faculty Development",
        image: "/Services/Cor1.webp",
        description: "Comprehensive support for academic planning, curriculum enhancement, and faculty training to strengthen institutional capacity.",
      },
      "International Scholarship Program Support": {
        title: "International Scholarship Program Support",
        image: "/Services/Cor2.webp",
        description: "End-to-end management of scholarship programs connecting recipients with accredited institutions and customized academic pathways.",
      },
      "Accreditation Consulting": {
        title: "Accreditation Consulting",
        image: "/Services/Cor3.jpg",
        description: "Expert guidance through the accreditation process to help institutions achieve recognition from leading international bodies.",
      },
      "Exchange & Collaboration Programs": {
        title: "Exchange & Collaboration Programs",
        image: "/Services/Cor4.jpg",
        description: "Facilitating cross-border academic experiences and institutional partnerships that promote global collaboration and knowledge exchange.",
      },
      "Talent & Faculty Mobility Programs": {
        title: "Talent & Faculty Mobility Programs",
        image: "/Services/Cor5.png",
        description: "Enabling faculty and staff mobility to enhance teaching quality, research collaboration, and global exposure.",
      },
      "Custom Training Solutions": {
        title: "Custom Training Solutions",
        image: "/Services/Cor6.jpg",
        description: "Bespoke training programs tailored to your institution's unique needs, goals, and industry focus.",
      },
    },
  },
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("Students");
  const [selectedSection, setSelectedSection] = useState<ServiceSection | null>(
    serviceData["Students"].sections[serviceData["Students"].sections.length - 1]
  );

  const currentSections = serviceData[activeTab].sections;
  const currentContent = serviceData[activeTab].content;

  // Ensure selected section is valid for current tab
  useEffect(() => {
    if (!selectedSection || !currentSections.includes(selectedSection)) {
      setSelectedSection(currentSections[currentSections.length - 1]);
    }
  }, [activeTab, selectedSection, currentSections]);

  // Set last section as selected when tab changes
  const handleTabChange = (tab: ServiceTab) => {
    setActiveTab(tab);
    const lastSection = serviceData[tab].sections[serviceData[tab].sections.length - 1];
    setSelectedSection(lastSection);
  };

  const selectedContent = selectedSection && currentContent[selectedSection] 
    ? currentContent[selectedSection]! 
    : null;

  return (
    <main>
      <ParallaxSection
        image="/Services/ServicesParrallax.png"
        title="Services"
        breadcrumb="Home/ Services"
        height="short"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-row items-end w-full max-w-[1200px]">
            {(["Students", "Professional", "Corporates"] as ServiceTab[]).map((tab, index) => {
              const isActive = activeTab === tab;
              let roundedClasses = "";
              if (tab === "Students") {
                roundedClasses = "rounded-tl-lg rounded-bl-lg";
              } else if (tab === "Corporates") {
                roundedClasses = "rounded-tr-lg rounded-br-lg";
              }

              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
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

        {/* Main Content - Accordion List */}
        <div className="max-w-[1200px] mx-auto">
          <ul className="flex gap-4">
            {currentSections.map((section) => {
              const content = currentContent[section];
              const isExpanded = selectedSection === section;
              
              if (!content) return null;
              
              return (
                <li
                  key={section}
                  className="overflow-hidden transition-all"
                >
                  {/* Clickable Header with Image and Title */}
                  <div
                    onClick={() => setSelectedSection(isExpanded ? null : section)}
                    className="cursor-pointer relative transition-all"
                    style={{
                      overflow: "hidden",
                      width: isExpanded ? "785px" : "112px",
                      height: "329px",
                    }}
                  >
                    {content.image && (
                      <div
                        className="relative overflow-hidden"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Image
                          src={content.image}
                          alt={content.title}
                          fill
                          className="object-cover"
                          style={{ zIndex: 0 }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundColor: isExpanded ? "#1E446980" : " #57575780",
                            backdropFilter: isExpanded ? "blur(0.5px)" : "blur(0.1px)",
                            zIndex: 1,
                          }}
                        />
                        <div
                          className="absolute"
                          style={isExpanded 
                            ? { 
                                zIndex: 2,
                                top: 0, 
                                left: 0, 
                                padding: "24px", 
                                maxWidth: "785px" 
                              }
                            : { 
                                zIndex: 2,
                                top: "50%", 
                                left: "50%", 
                                transform: "translate(-50%, -50%)",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }
                          }
                        >
                          <h3
                            className="transition-transform"
                            style={{
                              fontFamily: "Montserrat, sans-serif",
                              fontWeight: isExpanded ? 500 : 500,
                              fontSize: isExpanded ? "1.5rem" : "1rem",
                              textAlign: isExpanded ? "left" : "center",
                              lineHeight: isExpanded ? "100%" : "100%",
                              letterSpacing: isExpanded ? "0%" : "0%",
                              color: "#F1F1F1",
                              transform: isExpanded ? "rotate(0deg)" : "rotate(90deg)",
                              marginBottom: isExpanded ? "20px" : "0",
                              whiteSpace: isExpanded ? "normal" : "normal",
                            }}
                          >
                            {content.title}
                          </h3>
                          {isExpanded && (
                            <div style={{ maxWidth: "680px" }}>
                              <p
                                className="text-white"
                                style={{
                                  fontFamily: "Montserrat, sans-serif",
                                  fontWeight: 400,
                                  fontStyle: "normal",
                                  fontSize: "1rem",
                                  marginBottom: "16px",
                                }}
                              >
                                {content.description}
                              </p>
                              <Link 
                                href="/csr"
                                className="inline-flex items-center gap-2 px-6 py-3 text-[#1E4469] font-medium rounded-full transition-colors"
                                style={{
                                  background: "#D2DAE1",
                                  marginTop: "30px",
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                Apply Now
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.4248 16.5999L12.8581 11.1666C13.4998 10.5249 13.4998 9.4749 12.8581 8.83324L7.4248 3.3999" stroke="#1E4469" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
