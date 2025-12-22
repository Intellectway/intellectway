import Link from "next/link";

export function OpportunitiesCTA() {
  return (
    <section className="w-full" style={{ backgroundColor: '#D2DAE1' }}>
      <div>
        <div className="rounded-lg p-6 md:p-8 text-center py-12 md:py-16" style={{ backgroundColor: '#D2DAE1' }}>
          <h3 
            className="mb-4 text-slate-900"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            Opportunities with intellectway
          </h3>
          <p 
            className="mb-6 text-slate-600 mx-auto"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              paddingLeft: 'clamp(1rem, 4vw, 3.125rem)',
              paddingRight: 'clamp(1rem, 4vw, 3.125rem)',
              width: '100%',
              maxWidth: '989px',
              minHeight: '90px',
              opacity: 1,
            }}
          >
            At Intellectway, we are continuously seeking driven and passionate professionals who share our commitment to education and global impact. Join us in shaping opportunities, supporting learners, and advancing academic and professional success around the world.
          </p>
          <Link
            href="/opportunities"
            className="inline-block rounded-full px-8 py-3 text-white transition hover:opacity-90"
            style={{ 
              backgroundColor: '#1E4469',
              fontFamily: 'Montserrat',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            View Current Opennings
          </Link>
        </div>
      </div>
    </section>
  );
}

