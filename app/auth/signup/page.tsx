import type { Metadata } from "next";
import Link from "next/link";
import { Input, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your IntellectWay account.",
};

export default function SignUpPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center gap-6 px-6 py-16 mt-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Create account</h1>
        <p className="text-sm text-slate-600">
          Join our community to access personalized programs and resources.
        </p>
      </header>
      <form className="space-y-4">
        <Input label="Full name" name="name" required />
        <Input label="Email" type="email" name="email" required />
        <Input label="Password" type="password" name="password" required />
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          href="/auth/signin"
          className="font-medium text-[#17aac0] hover:text-[#0f7687]"
        >
          Sign in
        </Link>
      </p>
    </main>
  );
}

