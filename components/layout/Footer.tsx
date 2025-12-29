import { ReactNode } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

const contactIcons = {
  location: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  email: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  phone: (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
      <path
        d="M16.4775 13.7475C16.4775 14.0175 16.4175 14.295 16.29 14.565C16.1625 14.835 15.9975 15.09 15.78 15.33C15.4125 15.735 15.0075 16.0275 14.55 16.215C14.1 16.4025 13.6125 16.5 13.0875 16.5C12.3225 16.5 11.505 16.32 10.6425 15.9525C9.78 15.585 8.9175 15.09 8.0625 14.4675C7.2 13.8375 6.3825 13.14 5.6025 12.3675C4.83 11.5875 4.1325 10.77 3.51 9.915C2.895 9.06 2.4 8.205 2.04 7.3575C1.68 6.5025 1.5 5.685 1.5 4.905C1.5 4.395 1.59 3.9075 1.77 3.4575C1.95 3 2.235 2.58 2.6325 2.205C3.1125 1.7325 3.6375 1.5 4.1925 1.5C4.4025 1.5 4.6125 1.545 4.8 1.635C4.995 1.725 5.1675 1.86 5.3025 2.055L7.0425 4.5075C7.1775 4.695 7.275 4.8675 7.3425 5.0325C7.41 5.19 7.4475 5.3475 7.4475 5.49C7.4475 5.67 7.395 5.85 7.29 6.0225C7.1925 6.195 7.05 6.375 6.87 6.555L6.3 7.1475C6.2175 7.23 6.18 7.3275 6.18 7.4475C6.18 7.5075 6.1875 7.56 6.2025 7.62C6.225 7.68 6.2475 7.725 6.2625 7.77C6.3975 8.0175 6.63 8.34 6.96 8.73C7.2975 9.12 7.6575 9.5175 8.0475 9.915C8.4525 10.3125 8.8425 10.68 9.24 11.0175C9.63 11.3475 9.9525 11.5725 10.2075 11.7075C10.245 11.7225 10.29 11.745 10.3425 11.7675C10.4025 11.79 10.4625 11.7975 10.53 11.7975C10.6575 11.7975 10.755 11.7525 10.8375 11.67L11.4075 11.1075C11.595 10.92 11.775 10.7775 11.9475 10.6875C12.12 10.5825 12.2925 10.53 12.48 10.53C12.6225 10.53 12.7725 10.56 12.9375 10.6275C13.1025 10.695 13.275 10.7925 13.4625 10.92L15.945 12.6825C16.14 12.8175 16.275 12.975 16.3575 13.1625C16.4325 13.35 16.4775 13.5375 16.4775 13.7475Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  ),
} as const;

const socialLinks = [
  { href: "https://x.com/intellectway", label: "X.com", icon: "fa-brands fa-x-twitter" },
  { href: "https://www.facebook.com/pages/Intellect-Way/1554847638117508", label: "Facebook", icon: "fa-brands fa-facebook" },
  { href: "https://www.instagram.com/intellectway/", label: "Instagram", icon: "fa-brands fa-instagram" },
  { href: "https://www.linkedin.com/company/intellectway/?trk=biz-companies-cym", label: "LinkedIn", icon: "fa-brands fa-linkedin" },
] as const;

type ContactItem = {
  icon: ReactNode;
  label: string;
  href?: string;
};

const contact: Record<"us" | "uk", ContactItem[]> = {
  us: [
    {
      icon: contactIcons.location,
      label: "1775 Tysons\nBoulevard Floor 5\nMcLean, Virginia 22102",
    },
    {
      icon: contactIcons.email,
      label: "info@intellectway.com",
      href: "mailto:info@intellectway.com",
    },
    {
      icon: contactIcons.phone,
      label: "+1 (202) 601-9001",
      href: "tel:+12026019001",
    },
  ],
  uk: [
    {
      icon: contactIcons.location,
      label: "Hamilton House, Mabledon\nPlace London, Greater\nLondon, WC1H 9BB",
    },
    {
      icon: contactIcons.email,
      label: "info-uk@intellectway.com",
      href: "mailto:info-uk@intellectway.com",
    },
    {
      icon: contactIcons.phone,
      label: "+44-203-8685-601",
      href: "tel:+442038685601",
    },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#17AAC0] text-white">
      <div className="mx-auto w-full max-w-[85rem] px-6 py-6">
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 ">
              <Link href="/" className="flex items-start">
                <img
                  src="/WhiteLogo.png"
                  alt="IntellectWay"
                  width={320}
                  height="auto"
                  className="h-auto w-[320px]"
                />
              </Link>
              <p className="leading-relaxed" style={{ fontSize: '14px' }}>
                Academic Partnerships &amp; Global Programs
              </p>
            </div>
            <div>
              <h5 className="font-semibold tracking-wide uppercase text-white/80" style={{ fontSize: '14px' }}>
                Keep in Touch
              </h5>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:bg-white/20"
                  >
                    <i className={`${social.icon} text-2xl bg-transparent border-0`} style={{ background: 'transparent', border: '0' }}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="space-y-4 mt-5 ml-5">
            <div className="grid grid-cols-2 gap-y-6 font-normal" style={{ fontSize: '14px' }}>
              <div className="space-y-[25px]">
                <Link href="/" className="block transition hover:text-slate-900/80">
                  Home
                </Link>
                <Link href="/about" className="block transition hover:text-slate-900/80">
                  About
                </Link>
                <Link href="/services" className="block transition hover:text-slate-900/80">
                  Services
                </Link>
                <Link href="/partners" className="block transition hover:text-slate-900/80">
                  Affiliates
                </Link>
              </div>
              <div className="space-y-[28px]">
                <Link href="/blogs" className="block transition hover:text-slate-900/80">
                  Blog
                </Link>
                <Link href="/opportunities" className="block transition hover:text-slate-900/80">
                  Career
                </Link>
                <Link href="/csr" className="block transition hover:text-slate-900/80">
                  CRS
                </Link>
              </div>
            </div>
          </nav>

          <div className="space-y-4" style={{ marginLeft: '4rem', marginTop: '1rem' }}>
            <h3 className="font-semibold" style={{ fontSize: '14px' }}>United States</h3>
            <ul className="space-y-4" style={{ fontSize: '14px' }}>
              {contact.us.map(({ icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <Link
                      href={href}
                      className="flex items-start gap-4 transition hover:text-slate-900/80"
                    >
                      <span className="mt-0.5 flex-shrink-0 text-white">
                        {icon}
                      </span>
                      <span className="whitespace-pre-line">{label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex-shrink-0 text-white">
                        {icon}
                      </span>
                      <span className="whitespace-pre-line">{label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4" style={{ marginTop: '1rem' }}>
            <h3 className="font-semibold" style={{ fontSize: '14px' }}>United Kingdom</h3>
            <ul className="space-y-4" style={{ fontSize: '14px' }}>
              {contact.uk.map(({ icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <Link
                      href={href}
                      className="flex items-start gap-4 transition hover:text-slate-900/80"
                    >
                      <span className="mt-0.5 flex-shrink-0 text-white">
                        {icon}
                      </span>
                      <span className="whitespace-pre-line">{label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex-shrink-0 text-white">
                        {icon}
                      </span>
                      <span className="whitespace-pre-line">{label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/25 pt-6 font-normal text-white/80 md:flex-row md:items-center md:justify-between mt-4" style={{ fontSize: '14px' }}>
          <div className="flex flex-wrap items-center gap-5">
            <span>Sitemap</span>
            <span>Privacy &amp; Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>
          <p className="text-white/90" style={{ fontSize: '14px' }}>
            © Copyright 2025 IntellectWay. Designed and Developed by{" "}
            <Link
              href="https://entertab.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              entertab
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

