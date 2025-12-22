"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const linkClasses =
  "ml-3 rounded-md px-3 py-1 text-sm font-normal text-slate-600 transition hover:text-slate-900";

const routes = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Affiliates", href: "/represent-us" },
  { label: "CSR", href: "/csr" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Blogs", href: "/blogs" },
];

const serviceRoutes = [
  { label: "Student", href: "/services/student" },
  { label: "Professional", href: "/services/professional" },
  { label: "Corporate", href: "/services/corporate" },
];

export function Nav() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 border-b border-slate-200 bg-white/90 backdrop-blur z-[1000]">
      <div className="mx-auto flex max-w-[85rem] items-center justify-between px-6 py-2 gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="IntellectWay home">
          <Image
            src="/MainLogo.png"
            alt="IntellectWay"
            width={320}
            height={96}
            className="h-16 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          <Link
            href="/"
            className={linkClasses}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={linkClasses}
          >
            About
          </Link>
          <div
            ref={servicesRef}
            className="relative flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className={`${linkClasses} flex items-center gap-1`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Service
              <svg
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <>
                <span className="absolute left-0 right-0 top-full h-2" />
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white py-2 shadow-lg z-[1001]">
                  {serviceRoutes.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group block px-4 py-2 text-slate-600 transition"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span className="border-b border-transparent font-normal group-hover:border-[#1E4469] group-hover:text-[#1E4469]">
                        {service.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
          {routes.slice(2).map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={linkClasses}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/auth/signin"
            className="rounded-full border border-[#a7acb1] px-6 py-3 text-sm font-medium text-[#2a2f36] transition"
          >
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            className="rounded-full bg-[#17aac0] px-6 py-3 text-sm font-medium text-white transition"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center sm:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`h-0.5 bg-slate-700 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2 w-full" : "w-3 self-start"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-slate-700 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2 w-full" : "w-3 self-end"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[73px] z-[999] bg-black/50 sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[73px] left-0 right-0 z-[1000] h-[calc(100vh-73px)] overflow-y-auto bg-white transition-transform duration-300 ease-in-out sm:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {/* Mobile Navigation Links */}
          <Link
            href="/"
            className="border-b border-slate-200 py-4 text-base font-normal text-slate-600 transition hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="border-b border-slate-200 py-4 text-base font-normal text-slate-600 transition hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Services Dropdown in Mobile */}
          <div className="border-b border-slate-200">
            <button
              className="flex w-full items-center justify-between py-4 text-base font-normal text-slate-600 transition hover:text-slate-900"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>Service</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="pb-2 pl-4">
                {serviceRoutes.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-3 text-sm text-slate-600 transition hover:text-slate-900"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {routes.slice(2).map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="border-b border-slate-200 py-4 text-base font-normal text-slate-600 transition hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/auth/signin"
              className="rounded-full border border-[#a7acb1] px-6 py-3 text-center text-sm font-medium text-[#2a2f36] transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-full bg-[#17aac0] px-6 py-3 text-center text-sm font-medium text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

