"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ParallaxSection } from "@/components/ui";

type ServiceSection = 
  | "Academic & Faculty Development"
  | "International Scholarship Program Support"
  | "Accreditation Consulting"
  | "Exchange & Collaboration Programs"
  | "Talent & Faculty Mobility Programs"
  | "Custom Training Solutions";

const serviceSections: ServiceSection[] = [
  "Academic & Faculty Development",
  "International Scholarship Program Support",
  "Accreditation Consulting",
  "Exchange & Collaboration Programs",
  "Talent & Faculty Mobility Programs",
  "Custom Training Solutions",
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
  "Academic & Faculty Development": {
    title: "Academic & Faculty Development",
    image: "/Services/Cor1.webp",
    items: [
      {
        title: "Academic Planning & Curriculum Enhancement",
        description: "Intellectway works closely with qualified faculty and academic staff to develop personalized academic plans that strengthen curriculum integrity, align with global standards, and enhance student outcomes.",
      },
      {
        title: "Faculty Training & Development",
        description: "We offer structured training programs that equip faculty with practical skills, industry insights, and assessment tools. Our department specific workshops and professional development initiatives ensure academic staff are fully prepared to bridge classroom learning with real-world application.",
      },
      {
        title: "Customized Training Solutions",
        description: "We design and deliver bespoke academic and professional development programs tailored to your institution's unique goals ensuring flexibility, relevance, and measurable impact.",
      },
    ],
  },
  "International Scholarship Program Support": {
    title: "International Scholarship Program Support",
    image: "/Services/Cor2.webp",
    items: [
      {
        title: "Scholarship Program Management",
        description: "Intellectway partners with international organizations to connect scholarship recipients with accredited academic institutions that align with their educational and professional goals. We design and deliver customized academic and training programs based on the specific needs and objectives of each sponsoring entity.",
      },
      {
        title: "Academic & Cultural Exchange Programs",
        description: "We facilitate structured exchange programs that promote the sharing of knowledge, research, and cultural experiences between institutions. These initiatives foster global collaboration and open doors to diverse academic disciplines and professional fields.",
      },
    ],
  },
  "Accreditation Consulting": {
    title: "Accreditation Consulting",
    image: "/Services/Cor3.jpg",
    items: [
      {
        title: "Strategic Partnerships",
        description: "Intellectway maintains strong partnerships with globally respected institutions offering accredited academic and professional programs. Through these collaborations, we work to enhance educational quality and promote global academic standards.",
      },
      {
        title: "Accreditation Support Services",
        description: "We assist educational institutions and specialized organizations in obtaining accreditation from leading agencies in the U.S., U.K., and other international bodies. Our end-to-end support includes readiness assessments, documentation, process guidance, and compliance alignment ensuring institutions meet the rigorous criteria required for academic and professional recognition.",
      },
    ],
  },
  "Exchange & Collaboration Programs": {
    title: "Exchange & Collaboration Programs",
    image: "/Services/Cor4.jpg",
    items: [
      {
        title: "Student Exchange Initiatives",
        description: "Facilitating cross-border academic experiences that allow students to study abroad, earn credits, and engage with diverse cultures and educational systems.",
      },
      {
        title: "Faculty & Research Collaboration",
        description: "Enabling joint research projects, faculty exchange, and academic partnerships between institutions to promote innovation and interdisciplinary knowledge sharing.",
      },
      {
        title: "Cultural & Institutional Linkages",
        description: "Building long-term relationships between global institutions through cultural immersion programs, joint events, and strategic academic alignment.",
      },
    ],
  },
  "Talent & Faculty Mobility Programs": {
    title: "Talent & Faculty Mobility Programs",
    image: "/Services/Cor5.png",
    items: [
      {
        title: "International Faculty Exchange",
        description: "Facilitating short- and long-term faculty placements between partner institutions to enhance teaching quality, research collaboration, and global exposure.",
      },
      {
        title: "Professional Development Abroad",
        description: "Offering faculty and staff opportunities to participate in international training, workshops, and conferences that align with institutional goals and academic advancement.",
      },
      {
        title: "Visiting Scholar Programs",
        description: "Connecting institutions with distinguished global experts for guest lectures, research partnerships, and academic enrichment across disciplines.",
      },
    ],
  },
  "Custom Training Solutions": {
    title: "Custom Training Solutions",
    image: "/Services/Cor6.jpg",
    items: [
      {
        title: "Institution-Specific Program Design",
        description: "Developing tailored academic and professional training programs based on the unique needs, goals, and industry focus of each institution or organization.",
      },
      {
        title: "Sector-Focused Curriculum Development",
        description: "Creating specialized training modules aligned with key sectors such as healthcare, technology, business, and public service ensuring real-world relevance and impact.",
      },
      {
        title: "On-Demand Delivery Models",
        description: "Offering flexible delivery formats including in-person, online, and hybrid training solutions to accommodate organizational structure, geographic reach, and learner preferences.",
      },
    ],
  },
};

// Helper function to create a slug from section name
function createSlug(section: string): string {
  return section.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function CorporateServicesPage() {
  const [activeSection, setActiveSection] = useState<ServiceSection | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [apiServices, setApiServices] = useState<ApiService[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/service?serviceType=2");
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
        image="/Services/CorporateParrallax.png"
        title="Corporate Services"
        breadcrumb="Home/ Services / Corporate Services"
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
                Corporate Services
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
