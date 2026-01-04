import { ColoredLetters } from "@/components/ui";

export function AboutText() {
  return (
    <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4 sm:space-y-6">
        <h2
          className="ext-slate-900"
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '28px',
            lineHeight: '130%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#414141',
          }}>
          About intellectway
        </h2>

        <p
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#414141',
          }}
        >
          <span style={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#414141',
          }}>Intellectway</span> is a premier provider of training and educational solutions, serving ambitious individuals from the Middle East and North Africa who seek to advance their academic and professional journeys in the United States, the United Kingdom, and beyond.
        </p>
        <p
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#414141',
          }}
        >
          Our team of experienced academic and career advisors brings a deep commitment to inclusivity, cultural intelligence, and excellence. We are proud to collaborate with leading institutions and organizations to foster meaningful intercultural connections grounded in understanding, adaptability, and long-term success.
        </p>
        <p
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#414141',
          }}
        >
          Through a personalized and strategic approach, we support students, professionals, corporate clients, and nonprofit entities with high-impact services that ensure a smooth and confident transition into international academic and professional environments.
        </p>
        <p
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#414141',
          }}
        >
          At <span style={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#414141',
          }}>Intellectway</span>, we don't just guide we empower. By recognizing each individual's unique strengths, we craft tailored pathways that lead to the right opportunities, the right placements, and a future shaped by purpose and achievement.
        </p>
      </div>

      <div
        className="lg:col-span-1 relative min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] hidden lg:block"
        style={{
          display: 'flex',
          justifyContent: 'end',
        }}>
        {/* Top ColoredLetters */}
        <div
          className="absolute top-0 items-start gap-4 sm:gap-6"
        >
          <ColoredLetters
            size="medium"
            topLeftColor="#F8DD7B"
            topRightColor="#C3E5CA"
            bottomLeftColor="#F8DD7B"
            bottomRightColor="#C3E5CA"
          />
          <ColoredLetters
            size="medium"
            topLeftColor="#CFD2EE"
            topRightColor="#FFA9A0"
            bottomLeftColor="#CFD2EE"
            bottomRightColor="#FFA9A0"
          />
        </div>

        {/* Bottom ColoredLetters - Duplicated */}
        <div
          className="absolute items-end gap-4 sm:gap-6"
          style={{
            top: '55%',
          }}
        >
          <ColoredLetters
            size="medium"
            topLeftColor="#FFA9A0"
            topRightColor="#CFD2EE"
            bottomLeftColor="#FFA9A0"
            bottomRightColor="#CFD2EE"
          />
          <ColoredLetters
            size="medium"
            topLeftColor="#C3E5CA"
            topRightColor="#F8DD7B"
            bottomLeftColor="#C3E5CA"
            bottomRightColor="#F8DD7B"
          />
        </div>
      </div>
    </div>
  );
}

