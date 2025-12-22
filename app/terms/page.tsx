import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Review the terms for using IntellectWay services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Terms of Use</h1>
      <p className="text-sm leading-6 text-slate-600">
        This page will detail the terms and conditions for engaging with
        IntellectWay. Content coming soon.
      </p>
    </main>
  );
}

