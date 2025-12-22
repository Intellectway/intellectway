import type { Metadata } from "next";
import Link from "next/link";
import { Input, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Access your IntellectWay account.",
};

export default function SignInPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center gap-6 px-6 py-16">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Sign in</h1>
        <p className="text-sm text-slate-600">
          Welcome back. Please enter your credentials to continue.
        </p>
      </header>
      <form className="space-y-4">
        <Input label="Email" type="email" name="email" required />
        <Input label="Password" type="password" name="password" required />
        <div className="flex items-center justify-between text-sm">
          <Link
            href="/auth/reset-password"
            className="font-medium text-[#17aac0] hover:text-[#0f7687]"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
      <p className="text-center text-sm text-slate-600">
        Need an account?{" "}
        <Link
          href="/auth/signup"
          className="font-medium text-[#17aac0] hover:text-[#0f7687]"
        >
          Sign up
        </Link>
      </p>
    </main>
  );
}

