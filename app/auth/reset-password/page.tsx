import type { Metadata } from "next";
import { Input, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your IntellectWay account password.",
};

export default function ResetPasswordPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center gap-6 px-6 py-16">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          Reset password
        </h1>
        <p className="text-sm text-slate-600">
          Enter the email associated with your account and we will send reset
          instructions.
        </p>
      </header>
      <form className="space-y-4">
        <Input label="Email" type="email" name="email" required />
        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </form>
    </main>
  );
}

