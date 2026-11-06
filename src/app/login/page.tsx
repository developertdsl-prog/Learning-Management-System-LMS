"use client";

import { Navbar } from "@/components/ui/navbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lms-50 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-lms-200">
        <h2 className="text-2xl font-bold text-lms-800 mb-6 text-center">Welcome Back</h2>

        <form
          onSubmit={
            e => {
              e.preventDefault();
              // In a real app, this would authenticate the user
              alert("Login successful! (mock authentication)");
            }
          }
        className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-lms-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-lms-300 bg-lms-50 px-3.5 py-2 transition-colors focus:border-lms-600 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-lms-600 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-lg border border-lms-300 bg-lms-50 px-3.5 py-2 transition-colors focus:border-lms-600 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lms-600 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-lms-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-lms-500">
          Don't have an account? <a href="/register" className="font-medium text-lms-600 hover:underline">Register</a>
        </div>
      </div>
    </div>
  );
}