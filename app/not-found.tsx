import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <h1 className="text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="max-w-md text-base leading-7 text-slate-600">
        The page you are looking for may have been moved or no longer exists.
        Let us help you find your way.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-[#17aac0] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1292a6]"
      >
        Return home
      </Link>
    </main>
  );
}

