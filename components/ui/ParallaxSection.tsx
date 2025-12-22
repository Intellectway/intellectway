import Image from "next/image";

type ParallaxSectionProps = {
  image?: string;
  title: string;
  breadcrumb?: string;
  description?: string;
  height?: "short" | "medium" | "tall";
  variant?: "image" | "solid";
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;
  overlayColor?: string;
};

export function ParallaxSection({
  image,
  title,
  breadcrumb,
  description,
  height = "medium",
  variant = "image",
  gradientFrom = "from-slate-900/40",
  gradientTo = "to-slate-900/40",
  backgroundColor,
  overlayColor,
}: ParallaxSectionProps) {
  const heightClasses = {
    short: "h-[55vh]",
    medium: "h-[55vh]",
    tall: "h-[55vh]",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} overflow-hidden text-white mt-4 sm:mt-6 lg:mt-[30px]`}
    >
      {variant === "image" && image ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={`${title} background`}
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              priority
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(269.75deg, rgba(65, 65, 65, 0.25) 0.23%, rgba(65, 65, 65, 0.6) 99.81%)",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: backgroundColor || "#0f3f47" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(269.75deg, rgba(65, 65, 65, 0.25) 0.23%, rgba(65, 65, 65, 0.6) 99.81%)",
            }}
          />
        </>
      )}

      {breadcrumb ? (
        <div className="relative z-10 flex h-full items-end pb-4 sm:pb-6">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-white">
              {breadcrumb.split('/').map((part, index, array) => {
                const trimmedPart = part.trim();
                const isLast = index === array.length - 1;
                return (
                  <span key={index}>
                    {index > 0 && ' / '}
                    {isLast ? (
                      <span className="font-bold">{trimmedPart}</span>
                    ) : (
                      trimmedPart
                    )}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
            {description && (
              <p className="mx-auto max-w-2xl text-lg text-white/80">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

