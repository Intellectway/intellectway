"use client";

import Image from "next/image";

export function AboutUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[2fr_1fr] lg:gap-24 lg:justify-between">
        {/* Left Side - Text Content */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-900">About Intellectway</h2>
          
          <div className="space-y-3 md:space-y-4" style={{ color: '#414141' }}>
            <p className="text-base md:text-xl font-light" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>
              <span style={{ fontWeight: 500 }}>Intellectway</span> is a premier provider of training and educational solutions, serving ambitious individuals from the Middle East and North Africa who seek to advance their academic and professional journeys in the United States, the United Kingdom, and beyond.
            </p>
            <p className="text-base md:text-xl font-light" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>
              Our team of experienced academic and career advisors brings a deep commitment to inclusivity, cultural intelligence, and excellence. We are proud to collaborate with leading institutions and organizations to foster meaningful intercultural connections grounded in understanding, adaptability, and long-term success.
            </p>
            <p className="text-base md:text-xl font-light" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>
              Through a personalized and strategic approach, we support students, professionals, corporate clients, and nonprofit entities with high-impact services that ensure a smooth and confident transition into international academic and professional environments.
            </p>
            <p className="text-base md:text-xl font-light" style={{ fontFamily: 'Montserrat', fontWeight: 300 }}>
              At <span style={{ fontWeight: 500 }}>Intellectway</span>, we don't just guide we empower. By recognizing each individual's unique strengths, we craft tailored pathways that lead to the right opportunities, the right placements, and a future shaped by purpose and achievement.
            </p>
          </div>
        </div>

        {/* Right Side - Visual Elements */}
        <div className="relative mx-auto flex justify-center lg:ml-auto h-[420px] w-full max-w-[420px] md:h-[480px] md:max-w-[480px] lg:h-[580px] lg:w-[540px]">
          {/* Top Row */}
          <div className="absolute top-0 flex h-[200px] md:h-[230px] lg:h-[280px] justify-center gap-3 md:gap-4">
            {/* Top Left - Coral Circle */}
            <div className="mt-[10px] md:mt-[15px] lg:mt-[25px] h-24 w-24 md:h-26 md:w-26 lg:h-34 lg:w-34 flex-shrink-0 rounded-full bg-[#FF6B6B]"></div>
            
            {/* Top Middle - Handshake Photo */}
            <div className="relative h-[230px] w-[100px] md:h-[280px] md:w-[110px] lg:h-[330px] lg:w-[130px] overflow-hidden rounded-[10px]">
              <Image
                src="/Images/About-2.jpg"
                alt="Business handshake"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Top Right - Yellow Circle */}
            <div className="mt-[10px] md:mt-[15px] lg:mt-[25px] h-24 w-24 md:h-26 md:w-26 lg:h-34 lg:w-34 flex-shrink-0 rounded-full bg-[#FFD93D]"></div>
          </div>

          {/* Bottom Row */}
          <div className="absolute flex h-[200px] md:h-[230px] lg:h-[280px] items-center justify-center gap-3 md:gap-4" style={{ bottom: 'calc(var(--spacing) * 18)' }}>
            {/* Bottom Left - Woman Speaking Photo */}
            <div className="relative h-[230px] w-[100px] md:h-[280px] md:w-[110px] lg:h-[330px] lg:w-[130px] overflow-hidden rounded-[10px]">
              <Image
                src="/Images/About-1.png"
                alt="Professional speaking"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Middle - Green Circle */}
            <div className="mt-[28px] md:mt-[28px] lg:mt-[120px] h-24 w-24 md:h-26 md:w-26 lg:h-34 lg:w-34 flex-shrink-0 rounded-full bg-[#6BCB77]"></div>
            
            {/* Bottom Right - Student Learning Photo */}
            <div className="relative h-[230px] w-[100px] md:h-[280px] md:w-[110px] lg:h-[330px] lg:w-[130px] overflow-hidden rounded-[10px]">
              <Image
                src="/Images/About-3.png"
                alt="Student learning"
                fill
                className="object-cover"
                style={{ objectPosition: '30% center' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div 
          className="flex flex-col items-center justify-center rounded-[8px] border border-[#A7ACB1] bg-transparent hover:bg-[#EFF0F9] transition-all duration-300 py-8 px-6 text-center cursor-pointer"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 2px 4px 0px #41414166';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center bg-transparent">
            <Image
              src="/icons/VisionMissionValues/Extra.svg"
              alt="Mission icon"
              width={72}
              height={72}
              className="h-[72px] w-[72px]"
            />
          </div>
          <h3 
            className="mb-3 text-center text-slate-900" 
            style={{ 
              fontFamily: 'Montserrat', 
              fontWeight: 500, 
              fontSize: '24px', 
              lineHeight: '140%', 
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            Mission
          </h3>
          <p 
            className="text-center text-slate-600"
            style={{ 
              fontFamily: 'Montserrat', 
              fontWeight: 300, 
              fontSize: '18px', 
              lineHeight: '140%', 
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            To bridge individuals and institutions worldwide with transformative knowledge, strategic academic connections, and culturally responsive guidance, empowering our clients to thrive in global educational and professional landscapes.
          </p>
        </div>

        <div 
          className="flex flex-col items-center justify-center rounded-[8px] border border-[#A7ACB1] bg-transparent hover:bg-[#EFF0F9] transition-all duration-300 py-8 px-6 text-center cursor-pointer"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 2px 4px 0px #41414166';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center bg-transparent">
            <Image
              src="/icons/VisionMissionValues/Extra-1.svg"
              alt="Vision icon"
              width={72}
              height={72}
              className="h-[72px] w-[72px]"
            />
          </div>
          <h3 
            className="mb-3 text-center text-slate-900" 
            style={{ 
              fontFamily: 'Montserrat', 
              fontWeight: 500, 
              fontSize: '24px', 
              lineHeight: '140%', 
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            Vision
          </h3>
          <p 
            className="text-center text-slate-600"
            style={{ 
              fontFamily: 'Montserrat', 
              fontWeight: 300, 
              fontSize: '18px', 
              lineHeight: '140%', 
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            To cultivate empowered students, professionals, and institutions who contribute meaningfully to a more connected, innovative, and globally advanced society.
          </p>
        </div>

        <div 
          className="flex flex-col items-center justify-center rounded-[8px] border border-[#A7ACB1] bg-transparent hover:bg-[#EFF0F9] transition-all duration-300 py-8 px-6 text-center cursor-pointer"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 2px 4px 0px #41414166';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center bg-transparent">
            <Image
              src="/icons/VisionMissionValues/Extra-2.svg"
              alt="Values icon"
              width={72}
              height={72}
              className="h-[72px] w-[72px]"
            />
          </div>
          <h3 
            className="mb-3 text-center text-slate-900" 
            style={{ 
              fontFamily: 'Montserrat', 
              fontWeight: 500, 
              fontSize: '24px', 
              lineHeight: '140%', 
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            Values
          </h3>
          <p 
            className="text-center text-slate-600"
            style={{ 
              fontFamily: 'Montserrat', 
              fontWeight: 300, 
              fontSize: '18px', 
              lineHeight: '140%', 
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            Integrity. Honesty. Commitment. Objectivity.
            <br />
            These principles guide every decision we make and every service we deliver.
          </p>
        </div>
      </div>
    </section>
  );
}
