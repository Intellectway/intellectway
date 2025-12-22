import Image from "next/image";

const values = [
  {
    title: "Mission",
    description:
      "To bridge individuals and institutions worldwide with transformative knowledge, strategic academic connections, and culturally responsive guidance empowering our clients to thrive in global educational and professional landscapes.",
    image: "/MissionVission/Mission.png",
  },
  {
    title: "Vision",
    description:
      "To cultivate empowered students, professionals, and institutions who contribute meaningfully to a more connected, innovative, and globally advanced society.",
    image: "/MissionVission/Vission.jpg",
  },
  {
    title: "Values",
    description:
      "Integrity. Honesty. Commitment. Objectivity. These principles guide every decision we make and every service we deliver.",
    image: "/MissionVission/Values.png",
  },
];


export function MissionVisionValues() {
  return (
    <div className="space-y-4 sm:space-y-6 flex flex-col items-center">
      {values.map((value, index) => {
        const isVision = value.title === "Vision";
        const isReversed = isVision;

        const isMissionOrValues = value.title === "Mission" || value.title === "Values";

        return (
          <div
            key={value.title}
            className="w-full max-w-7xl"
            style={{
              backgroundColor: "#D1EEF2",
              paddingTop: "12px",
              paddingRight: "12px",
              paddingBottom: "12px",
              paddingLeft: "12px",
              borderRadius: "24px",
              opacity: 1,
            }}
          >
            <div 
            className={`flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 mx-auto relative ${isReversed ? "sm:flex-row-reverse" : ""}`}
            style={{ 
              borderRadius: "24px",
              width: "100%",
              minHeight: "auto",
              paddingTop: "12px",
              paddingRight: "12px",
              paddingBottom: "12px",
              paddingLeft: "12px",
              backgroundColor: "#F1F1F1",
           }}>
              {/* Blue background extending from opposite side of image - only behind image area - hidden on mobile */}
              <div 
                className="hidden lg:block absolute"
                style={{
                  left: isReversed ? 0 : "auto",
                  right: isReversed ? "auto" : 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: isVision ? "calc(100% - 970px)" : "calc(100% - 960px)",
                  height: "225px",
                  backgroundColor: "rgb(209, 238, 242)",
                  borderRadius: isReversed ? "0 130px 130px 0" : "130px 0 0 130px",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% calc(50% - 130px), 100% calc(50% - 130px), 100% calc(50% + 130px), 0% calc(50% + 130px))"
                }}
              />
              {/* Icon and Text Section */}
              <div 
                className="flex-1 flex flex-col items-start gap-3 sm:gap-4 relative z-10 w-full sm:w-auto"
                style={{
                  marginLeft: "1rem",
                }}
              >
                {/* Icons */}
                {value.title === "Mission" && (
                  <div className="flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px]">
                    <Image
                      src="/icons/VisionMissionValues/Extra.svg"
                      alt="Mission icon"
                      width={72}
                      height={72}
                      className="w-full h-full"
                    />
                  </div>
                )}
                {value.title === "Vision" && (
                  <div className="flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px]">
                    <Image
                      src="/icons/VisionMissionValues/Extra-1.svg"
                      alt="Vision icon"
                      width={72}
                      height={72}
                      className="w-full h-full"
                    />
                  </div>
                )}
                {value.title === "Values" && (
                  <div className="flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px]">
                    <Image
                      src="/icons/VisionMissionValues/Extra-2.svg"
                      alt="Values icon"
                      width={72}
                      height={72}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Title and Description */}
                <div className="flex flex-col gap-2 flex-1">
                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-slate-900"
                    style={{
                      color: "#414141"
                    }}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-lg sm:text-lg leading-5 sm:leading-6 text-slate-600 max-w-4xl"
                  >
                    {value.description}
                  </p>
                  </div>
                </div>

              {/* Circular Image */}
              <div className="flex-shrink-0 relative z-10 mx-auto sm:mx-0" style={{ width: "180px", height: "180px" }}>
                {/* Image container - responsive size */}
                <div 
                  className="absolute rounded-full overflow-hidden"
                  style={{
                    width: "200px",
                    height: "200px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    ...(isVision ? {} : { right: "10px" })
                  }}
                >
                  <Image
                    src={value.image}
                    alt={`${value.title} image`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

