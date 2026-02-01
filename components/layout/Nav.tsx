"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check auth state on mount and when it might change
    const checkAuth = () => {
      const auth = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(auth);
    };

    checkAuth();

    // Listen for storage changes (for multiple tabs or same tab updates)
    window.addEventListener("storage", checkAuth);
    // Custom event to trigger re-check within the same tab if needed
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isServicesOpen || isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen, isUserMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    router.push("/");
    // Trigger event for other components if needed
    window.dispatchEvent(new Event("authChange"));
  };

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
                className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
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
          {!isLoggedIn ? (
            <>
              <Link
                href="/auth/signin"
                className="rounded-full border border-[#a7acb1] px-6 py-3 text-sm font-medium text-[#2a2f36] transition hover:bg-slate-50"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-full bg-[#17aac0] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1498ac]"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white py-2 shadow-lg z-[1001]">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("user") || '{}').name || 'User'}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("user") || '{}').email || ''}
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#17aac0]"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
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
              className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2 w-full" : "w-3 self-start"
                }`}
            />
            <span
              className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 w-full" : "w-3 self-end"
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
        className={`fixed top-[73px] left-0 right-0 z-[1000] h-[calc(100vh-73px)] overflow-y-auto bg-white transition-transform duration-300 ease-in-out sm:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>Service</span>
              <svg
                className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""
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
            {isMobileServicesOpen && (
              <div className="pb-2 pl-4">
                {serviceRoutes.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-3 text-sm text-slate-600 transition hover:text-slate-900"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
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
            {!isLoggedIn ? (
              <>
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
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-[#a7acb1] px-6 py-3 text-center text-sm font-medium text-[#2a2f36] transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-full bg-red-500 px-6 py-3 text-center text-sm font-medium text-white transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

