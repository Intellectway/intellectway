import Image from "next/image";
import Link from "next/link";

// Array of logo image numbers (using first 18 for the grid)
const logoImages = [
  "1", "2", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "17", "18", "27", "28"
];

export function CompaniesSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 py-16 p-8 lg:p-0">
      <header className="space-y-4 text-center">
        <h2
          className="text-3xl font-semibold"
          style={{ color: "#414141" }}
        >
          Institutions We Work With
        </h2>
        <p
          className="mx-auto max-w-5xl"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 300,
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            lineHeight: "150%",
            color: "#666666"
          }}
        >
          We are proud to have collaborated with a wide range of reputable universities, training centers, and professional organizations around the world. These partnerships reflect our commitment to quality, trust, and lasting impact.
        </p>
      </header>

      <div className="relative">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-4 md:gap-8">
          {logoImages.map((logoNum) => (
            <div
              key={logoNum}
            >
              <Image
                src={`/Logos/SVG/image ${logoNum}.svg`}
                alt={`Institution logo ${logoNum}`}
                width={250}
                height={160}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <Link
            href="/partners"
            className="text-sm font-medium transition hover:underline"
            style={{ color: "#666666" }}
          >
            +50 more
          </Link>
        </div>
      </div>
    </section>
  );
}
