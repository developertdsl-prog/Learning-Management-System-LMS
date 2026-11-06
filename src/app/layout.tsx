import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Management System",
  description: "A simple, functional LMS platform",
};

// Simple mock authentication state
const isAuthenticated = true; // In a real app, this would come from context/session

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-lms-50 dark:bg-lms-950">
      <body className="min-h-full flex flex-col">
        {/* Only show sidebar on desktop (lg+) and when authenticated */}
        {isAuthenticated && (
          <Sidebar />
        )}

        <div className="ml-64 min-h-screen">
          <Navbar />

          <main className="px-6 py-16 sm:px-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}