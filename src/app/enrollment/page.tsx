import { Navbar } from "@/components/ui/navbar";

export default function EnrollmentPage() {
  return (
    <div className="min-h-screen bg-lms-50 p-6">
      <Navbar />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-lms-200">

          <h2 className="text-2xl font-bold text-lms-800 mb-6 text-center">Enroll in Course</h2>

          <div className="grid grid-cols-2 gap-6 mb-8">

            <div>
              <h3 className="text-lg font-medium text-lms-700 mb-3">React Fundamentals</h3>
              <p className="text-lms-500 text-sm">Instructor: Sarah Johnson</p>
              <p className="text-lms-600 font-medium">1,248 students enrolled</p>
              <p className="text-lms-500 text-sm">Course progress: 45% complete</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-lms-700 mb-3">Next.js Masterclass</h3>
              <p className="text-lms-500 text-sm">Instructor: Michael Chen</p>
              <p className="text-lms-600 font-medium">892 students enrolled</p>
              <p className="text-lms-500 text-sm">Course progress: 63% complete</p>
            </div>
          </div>

          <button
            className="w-full bg-lms-600 text-white py-3 rounded-lg font-medium text-sm hover:bg-lms-700 transition-colors"
          >
            Enroll Now
          </button>

          <div className="mt-6 text-center text-sm text-lms-500">
            Already enrolled? <a href="/progress" className="font-medium text-lms-600 hover:underline">Go to dashboard</a>
          </div>
        </div>
      </div>
    </div>
  );
}