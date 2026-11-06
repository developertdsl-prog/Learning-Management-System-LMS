import { Navbar } from "@/components/ui/navbar";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-lms-50 p-6">
      <Navbar />

      <div className="max-w-md mx-auto pt-20 text-center">
        <div className="w-24 h-24 rounded-full bg-lms-200 mx-auto mb-6 flex items-center justify-center">
          <svg className="w-12 h-12 text-lms-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2M12 21v2M4.93 4.93l2.83 2.83m13.94 13.94l2.83 2.83M1 12.93l2.83 2.83M15.93 1l2.83 2.83M9.93 9.93l2.83 2.83M5.93 15.93l2.83 2.83M19.93 19.93l2.83 2.83"/>
          </svg>
        </div>

        <h1 className="text-5xl font-bold text-lms-800">404</h1>
        <p className="text-lms-500 mt-4 text-lg">Page not found</p>
        <div className="mt-8">
          <a href="/" className="bg-lms-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-lms-700 transition-colors">
            Go to Homepage
          </a>
          <a href="/courses" className="ml-4 text-lms-600 text-sm font-medium hover:underline">
            Browse Courses
          </a>
        </div>
      </div>
    </div>
  );
}