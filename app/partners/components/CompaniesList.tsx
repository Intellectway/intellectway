import Image from "next/image";

// All available logo images
const logoImages = [
  "1", "2", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "17", "18", "27", "28",
  "29", "30", "31", "32", "33", "35", "36", "37", "39",
  "40", "41", "42", "43", "44"
];

export function CompaniesList() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 
          className="text-3xl font-semibold"
          style={{ 
            fontFamily: "Montserrat",
            color: "#414141"
          }}
        >
          Our Partners
        </h3>
        <p 
          className="text-base"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            color: "#666666"
          }}
        >
          Institutions we have worked with
        </p>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8">
        {logoImages.map((logoNum) => (
          <div
            key={logoNum}
            className="flex items-center justify-center p-4"
          >
            <Image
              src={`/Logos/SVG/image ${logoNum}.svg`}
              alt={`Partner institution logo ${logoNum}`}
              width={120}
              height={80}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

