import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from "@/components/layout";
import { ScrollToTop } from "@/components/ui";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntellectWay",
  description: "Premier provider of training and educational solutions",
  icons: {
    icon: [
      { url: "/MainLogo.png", type: "image/png" },
    ],
    apple: [
      { url: "/MainLogo.png", type: "image/png" },
    ],
    shortcut: "/MainLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
      >
        <div className="flex min-h-screen flex-col bg-[#F1F1F1] text-slate-900" style={{ backgroundColor: '#F1F1F1' }}>
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
