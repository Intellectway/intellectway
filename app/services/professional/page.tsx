"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ParallaxSection } from "@/components/ui";

type ServiceSection = 
  | "Training & Executive Education"
  | "Conferences, Workshops & Guest Speakers"
  | "Corporate Learning & Development"
  | "Professional Certifications"
  | "Consulting & Advisory Services";

const serviceSections: ServiceSection[] = [
  "Training & Executive Education",
  "Conferences, Workshops & Guest Speakers",
  "Corporate Learning & Development",
  "Professional Certifications",
  "Consulting & Advisory Services",
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
  "Training & Executive Education": {
    title: "Training & Executive Education",
    image: "/Services/Prof1.jpg",
    items: [
      {
        title: "Leadership & Management Programs",
        description: "We offer specialized training in leadership, organizational strategy, and executive decision-making to support professional growth and institutional advancement.",
      },
      {
        title: "Sector-Specific Skill Development",
        description: "Custom programs designed to enhance technical and functional expertise across industries such as healthcare, education, finance, and public administration.",
      },
      {
        title: "Short Courses & Certification Tracks",
        description: "Flexible learning formats including intensive workshops, short-term courses, and internationally recognized certifications tailored to evolving professional needs.",
      },
      {
        title: "Customized Executive Education",
        description: "Bespoke training solutions co-developed with global academic partners to address the specific goals of corporate clients, government agencies, and NGOs.",
      },
    ],
  },
  "Conferences, Workshops & Guest Speakers": {
    title: "Conferences, Workshops & Guest Speakers",
    image: "/Services/Prof2.jpeg",
    items: [
      {
        title: "Industry Conference Participation",
        description: "We coordinate institutional participation in global conferences and expos, ensuring visibility, networking opportunities, and alignment with sector priorities.",
      },
      {
        title: "Workshop Design & Delivery",
        description: "We develop and facilitate specialized workshops tailored to organizational needs focused on capacity building, innovation, and applied knowledge.",
      },
      {
        title: "Keynote & Guest Speaker Engagements",
        description: "We arrange speaking opportunities with renowned experts and industry leaders for academic events, executive programs, and institutional summits.",
      },
      {
        title: "Panel Moderation & Thought Leadership",
        description: "We support institutions in curating and moderating expert panels that foster dialogue, elevate institutional reputation, and drive thought leadership in targeted domains.",
      },
    ],
  },
  "Corporate Learning & Development": {
    title: "Corporate Learning & Development",
    image: "/Services/Prof3.jpg",
    items: [
      {
        title: "Customized Training Programs",
        description: "We design tailored learning experiences that align with organizational goals, industry standards, and workforce development needs.",
      },
      {
        title: "Workforce Upskilling & Reskilling",
        description: "Practical training modules aimed at enhancing core competencies, adopting new technologies, and preparing teams for evolving market demands.",
      },
      {
        title: "Public Sector Capacity Building",
        description: "Specialized programs for government entities that strengthen institutional performance, policy implementation, and service delivery.",
      },
    ],
  },
  "Professional Certifications": {
    title: "Professional Certifications",
    image: "/Services/Prof4.png",
    items: [
      {
        title: "Global Credential Identification",
        description: "We guide professionals in selecting internationally recognized certifications that align with their industry, role, and long-term career objectives.",
      },
      {
        title: "Enrollment & Application Support",
        description: "End-to-end assistance with registration, documentation, and exam preparation to ensure a smooth and successful certification process.",
      },
      {
        title: "Industry-Specific Certifications",
        description: "Access to specialized credentials in fields such as project management, data analytics, finance, education, and information technology.",
      },
      {
        title: "Professional Growth Planning",
        description: "Strategic advising to help individuals leverage certifications as part of broader career development and advancement plans.",
      },
    ],
  },
  "Consulting & Advisory Services": {
    title: "Consulting & Advisory Services",
    image: "/Services/Prof5.jpg",
    items: [
      {
        title: "Educational Program Design",
        description: "We assist institutions in designing, evaluating, and enhancing academic programs to align with international standards and industry relevance.",
      },
      {
        title: "Talent & Organizational Development",
        description: "Our experts support organizations in building effective talent strategies, workforce planning, and leadership development frameworks.",
      },
      {
        title: "Institutional Strategy & Planning",
        description: "We provide high-level advisory on organizational growth, market positioning, and strategic partnerships to drive long-term impact.",
      },
      {
        title: "Capacity-Building Initiatives",
        description: "Tailored support for NGOs, academic institutions, and public-sector entities focused on improving institutional performance and operational efficiency.",
      },
    ],
  },
};

// Helper function to create a slug from section name
function createSlug(section: string): string {
  return section.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function ProfessionalServicesPage() {
  const [activeSection, setActiveSection] = useState<ServiceSection | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [apiServices, setApiServices] = useState<ApiService[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/service?serviceType=1");
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
        image="/Services/ProfParrallax.jpg"
        title="Professional Services"
        breadcrumb="Home/ Services / Professional Services"
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
                Professional Services
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
                          fontSize: "1.5rem",
                          color: "#414141",
                          marginTop: "40px",
                        }}
                      >
                        {content.title}
                      </h1>

                      {/* Content Items */}
                      <div className="space-y-4">
                        {content.items.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <h3
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 500,
                                fontSize: "1.25rem",
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
                        <button className="inline-flex items-center px-6 py-3 bg-[#17aac0] text-white font-medium rounded-full hover:bg-[#1494a8] transition-colors">
                          Apply Now
                        </button>
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
                          fontSize: "1.5rem",
                          color: "#414141",
                          marginTop: "40px",
                        }}
                      >
                        {service.title}
                      </h1>

                      {/* Description */}
                      <div className="space-y-4">
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
                        <button className="inline-flex items-center px-6 py-3 bg-[#17aac0] text-white font-medium rounded-full hover:bg-[#1494a8] transition-colors">
                          Apply Now
                        </button>
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
