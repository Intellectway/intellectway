import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Understand how IntellectWay collects and uses your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
      <p className="text-sm leading-6 text-slate-600">
        This page will outline our practices for data collection, usage, and
        security. Content coming soon.
      </p>
    </main>
  );
}

