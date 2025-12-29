"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ParallaxSection } from "@/components/ui";

type ServiceSection = 
  | "Language & Test Preperation"
  | "Career Development & Practical Training"
  | "Academic & Admissions Services"
  | "Logistics & Living Arrangements"
  | "Visa & Immigration Services";

const serviceSections: ServiceSection[] = [
  "Language & Test Preperation",
  "Career Development & Practical Training",
  "Academic & Admissions Services",
  "Logistics & Living Arrangements",
  "Visa & Immigration Services",
];

type ApiService = {
  title: string;
  type: number;
  description: string;
  id: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string | null;
  updatedAt: string | null;
};

const serviceContent: Record<ServiceSection, {
  title: string;
  image?: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}> = {
  "Language & Test Preperation": {
    title: "Language & Test Preperation",
    image: "/Services/Student1.jpg",
    items: [
      {
        title: "ESL/EFL Program Enrollment",
        description: "We assist students in enrolling at accredited English language institutes across the U.S. and U.K., ensuring alignment with academic and visa requirements.",
      },
      {
        title: "Standardized Test Preparation",
        description: "We provide expert-led coaching for major standardized exams such as the ACT, SAT, GMAT, GRE, LSAT, MCAT, TOEFL, and IELTS delivered both online and in-person.",
      },
      {
        title: "Language Proficiency Advising",
        description: "Personalized assessment and guidance to help students select the appropriate language programs and testing paths based on academic goals.",
      },
      {
        title: "Academic English Support",
        description: "Supplementary support in academic writing, reading comprehension, and communication skills to enhance performance in higher education environments.",
      },
    ],
  },
  "Career Development & Practical Training": {
    title: "Career Development & Practical Training",
    image: "/Services/Student2.png",
    items: [
      {
        title: "Career Advising & Planning",
        description: "One-on-one guidance to help students define their career goals, build actionable plans, and align their academic path with future opportunities.",
      },
      {
        title: "Skills Development & Readiness",
        description: "Support with resume writing, interview preparation, and workplace skills to ensure students are fully prepared for professional environments.",
      },
      {
        title: "Internship & Co-op Placement",
        description: "Assistance in securing practical training experiences through internships, externships, and co-op programs relevant to each student's field of study.",
      },
      {
        title: "OPT, CPT & STEM Extension Support",
        description: "Expert guidance on navigating U.S. work authorization programs including OPT, CPT, and STEM extensions, ensuring compliance and readiness for real-world application.",
      },
    ],
  },
  "Academic & Admissions Services": {
    title: "Academic & Admissions Services",
    image: "/Services/Student3.jpg",
    items: [
      {
        title: "Program & Institution Selection",
        description: "We help students identify the right academic programs and universities that align with their goals, academic background, and long-term career plans.",
      },
      {
        title: "Admissions Strategy & Planning",
        description: "Our advisors guide students through every phase of the admissions process, from timeline planning to application strategy ensuring a structured and competitive approach.",
      },
      {
        title: "Document & Application Management",
        description: "We handle transcript reviews, credential evaluations, and complete application submissions with precision and compliance to institutional requirements.",
      },
      {
        title: "Academic Writing Support",
        description: "Our writing specialists assist with personal statements, research proposals, and other key documents ensuring clarity, originality, and academic strength.",
      },
    ],
  },
  "Logistics & Living Arrangements": {
    title: "Logistics & Living Arrangements",
    image: "/Services/Student4.png",
    items: [
      {
        title: "Health Insurance Coordination",
        description: "We assist students in selecting and enrolling in comprehensive health insurance plans that meet institutional policies and host country regulations.",
      },
      {
        title: "Accommodation Placement",
        description: "Our team secures safe, well-located, and cost-effective housing solutions based on the student's academic location, preferences, and duration of stay.",
      },
      {
        title: "Transportation Management",
        description: "We coordinate reliable transportation options, including airport transfers and local transit support, to ensure ease of mobility upon arrival and throughout the stay.",
      },
      {
        title: "Essential Living Support",
        description: "We provide structured guidance on setting up essential services such as banking, mobile connectivity, and day-to-day logistics enabling students to adapt quickly and confidently to their new environment.",
      },
    ],
  },
  "Visa & Immigration Services": {
    title: "Visa & Immigration Services",
    image: "/Services/Student5.jpg",
    items: [
      {
        title: "Document Preparation & Review",
        description: "Thorough assistance in compiling, organizing, and reviewing all required documentation to ensure accuracy and compliance with visa regulations.",
      },
      {
        title: "Appointment Scheduling & Coordination",
        description: "End-to-end support in securing embassy or consulate appointments, including real-time updates and logistical guidance for each stage.",
      },
      {
        title: "Interview Coaching",
        description: "Personalized coaching sessions to prepare students for visa interviews, focusing on clarity, confidence, and alignment with visa requirements.",
      },
      {
        title: "Immigration Advising",
        description: "Ongoing consultation on visa regulations, status maintenance, and immigration compliance throughout the student's academic journey.",
      },
    ],
  },
};

// Helper function to create a slug from section name
function createSlug(section: string): string {
  return section.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function StudentServicesPage() {
  const [activeSection, setActiveSection] = useState<ServiceSection | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [apiServices, setApiServices] = useState<ApiService[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/service?serviceType=0");
        if (res.ok) {
          const data = await res.json();
          setApiServices(data || []);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      // Check existing sections
      for (const section of serviceSections) {
        const element = sectionRefs.current[section];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Check API service sections
      for (const service of apiServices) {
        const serviceId = `api-service-${service.id}`;
        const element = sectionRefs.current[serviceId];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(serviceId as any);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [apiServices]);

  const scrollToSection = (section: ServiceSection | string) => {
    const element = sectionRefs.current[section];
    if (element) {
      const offset = 100; // Offset from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <ParallaxSection
        image="/Services/StudentParrallax.jpg"
        title="Student Services"
        breadcrumb="Home/ Services / Student Services"
        height="short"
      />
      
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-18">
              <h2 
                className="mb-6 p-3 pl-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.3rem",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  verticalAlign: "middle",
                  color: "#183654",
                  backgroundColor: "#4B69871A",
                  borderRadius: "18px",
                }}
              >
                Student Services
              </h2>
              <nav>
                <ul className="space-y-2">
                  {serviceSections.map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className="w-full text-left px-4 py-3 rounded-lg transition-all hover:underline"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 500,
                          fontSize: "1rem",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: activeSection === section ? "#4B6987" : "#1E4469",
                          textDecoration: activeSection === section ? "underline" : "none",
                        }}
                        onMouseEnter={(e) => {
                          if (activeSection !== section) {
                            e.currentTarget.style.color = "#4B6987";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeSection !== section) {
                            e.currentTarget.style.color = "#1E4469";
                          }
                        }}
                      >
                        {section}
                      </button>
                    </li>
                  ))}
                  {apiServices.map((service) => {
                    const serviceId = `api-service-${service.id}`;
                    return (
                      <li key={service.id}>
                        <button
                          onClick={() => scrollToSection(serviceId)}
                          className="w-full text-left px-4 py-3 rounded-lg transition-all hover:underline"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 500,
                            fontSize: "1rem",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: activeSection === serviceId ? "#4B6987" : "#1E4469",
                            textDecoration: activeSection === serviceId ? "underline" : "none",
                          }}
                          onMouseEnter={(e) => {
                            if (activeSection !== serviceId) {
                              e.currentTarget.style.color = "#4B6987";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeSection !== serviceId) {
                              e.currentTarget.style.color = "#1E4469";
                            }
                          }}
                        >
                          {service.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right Content Area - All Sections Stacked */}
          <div className="lg:col-span-8">
            <div className="space-y-16">
              {serviceSections.map((section) => {
                const content = serviceContent[section];
                const sectionId = createSlug(section);
                
                return (
                  <div
                    key={section}
                    id={sectionId}
                    ref={(el) => {
                      sectionRefs.current[section] = el;
                    }}
                    className="scroll-mt-24"
                  >
                    <div className="space-y-4">
                      {/* Image Section */}
                      {content.image && (
                        <div 
                          className="relative overflow-hidden"
                          style={{
                            width: "400px",
                            aspectRatio: "420/273",
                            borderRadius: "25px",
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
                            className="absolute"
                            style={{ 
                              zIndex: 1,
                              position: "absolute",
                              right: "0",
                              width: "45%",
                              height: "100%",
                              opacity: 0.5,
                            }}
                          >
                            <Image
                              src="/Images/LeftPattern.png"
                              alt="Pattern overlay"
                              fill
                              className="object-cover"
                              style={{
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Title */}
                      <h1
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 500,
                          fontSize: "1.25rem",
                          letterSpacing: "0%",
                          color: "#414141",
                          marginTop: "40px",
                        }}
                      >
                        {content.title}
                      </h1>

                      {/* Content Items */}
                      <div className="space-y-6">
                        {content.items.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <h3
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 500,
                                fontSize: "1.2rem",
                                letterSpacing: "0%",
                                color: "#414141",
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 400,
                                fontSize: "1rem",
                                letterSpacing: "0%",
                                color: "#414141",
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Apply Now Button */}
                      <div className="pt-4">
                        <Link href="/csr" className="inline-flex items-center px-6 py-3 bg-[#17aac0] text-white font-medium rounded-full hover:bg-[#1494a8] transition-colors">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* API Services Content */}
              {apiServices.map((service) => {
                const serviceId = `api-service-${service.id}`;
                return (
                  <div
                    key={service.id}
                    id={serviceId}
                    ref={(el) => {
                      sectionRefs.current[serviceId] = el;
                    }}
                    className="scroll-mt-24"
                  >
                    <div className="space-y-4">
                      {/* Title */}
                      <h1
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 500,
                          fontSize: "1.25rem",
                          letterSpacing: "0%",
                          color: "#414141",
                          marginTop: "40px",
                        }}
                      >
                        {service.title}
                      </h1>

                      {/* Description */}
                      <div className="space-y-6">
                        <div 
                          className="space-y-2"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 400,
                            fontSize: "1rem",
                            letterSpacing: "0%",
                            color: "#414141",
                          }}
                          dangerouslySetInnerHTML={{ __html: service.description }}
                        />
                      </div>

                      {/* Apply Now Button */}
                      <div className="pt-4">
                        <Link href="/csr" className="inline-flex items-center px-6 py-3 bg-[#17aac0] text-white font-medium rounded-full hover:bg-[#1494a8] transition-colors">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
