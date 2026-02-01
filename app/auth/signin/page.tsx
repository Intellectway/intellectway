"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@/components/ui";
import Swal from "sweetalert2";

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://intellecatwayfinal.runasp.net/api/Authentication/login', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Invalid email or password');
      }

      const data = await response.json();

      // Set auth state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show success message
      await Swal.fire({
        icon: 'success',
        title: 'Welcome Back!',
        text: `Successfully signed in, welcome ${data.user.name}!`,
        confirmButtonColor: '#17aac0',
        timer: 1500,
        showConfirmButton: false
      });

      // Notify other components (like Nav)
      window.dispatchEvent(new Event("authChange"));

      // Redirect to dashboard
      router.push("/dashboard");

    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center gap-6 px-6 py-16 mt-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Sign in</h1>
        <p className="text-sm text-slate-600">
          Welcome back. Please enter your credentials to continue.
        </p>
      </header>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="flex items-center justify-between text-sm">
          <Link
            href="/auth/reset-password"
            className="font-medium text-[#17aac0] hover:text-[#0f7687]"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign in'}
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

