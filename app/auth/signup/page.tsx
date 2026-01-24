"use client";

import Link from "next/link";
import { useState } from "react";
import { Input, Button } from "@/components/ui";
import Swal from "sweetalert2";

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
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
      const response = await fetch('http://intellecatwayfinal.runasp.net/api/NewUser', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          fullName: formData.fullName,
          password: formData.password,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('User created successfully:', data);

      // Show success message with SweetAlert
      await Swal.fire({
        icon: 'success',
        title: 'Account Created!',
        text: 'Your account has been created successfully. Please sign in.',
        confirmButtonColor: '#17aac0',
        confirmButtonText: 'Go to Sign In'
      });

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });

    } catch (err) {
      console.error('Error creating account:', err);
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';

      // Show error message with SweetAlert
      await Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: errorMessage,
        confirmButtonColor: '#17aac0'
      });

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center gap-6 px-6 py-16 mt-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Create account</h1>
        <p className="text-sm text-slate-600">
          Join our community to access personalized programs and resources.
        </p>
      </header>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          label="Full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
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
        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Sign up'}
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

