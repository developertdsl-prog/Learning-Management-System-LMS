import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-lms-50">
      <Sidebar />

      <div className="ml-64 min-h-screen">
        <Navbar />

        <main className="px-6 py-16 sm:px-12">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col lg:flex-row gap-6 mb-8 items-start">

              <div>
                <h1 className="text-3xl font-bold text-lms-800">Admin Panel</h1>
                <p className="text-lms-500 mt-1">Manage the entire learning platform</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="bg-lms-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-lms-700 transition-colors"
                >
                  Users
                </button>
                <button
                  className="bg-lms-100 text-lms-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-lms-200 transition-colors"
                >
                  Courses
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-lms-200">
                <h3 className="text-xl font-medium text-lms-700 mb-4">User Management</h3>
                <p className="text-lms-500 text-sm">
                  Manage all registered users and their roles
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-lms-200">
                <h3 className="text-xl font-medium text-lms-700 mb-4">Course Management</h3>
                <p className="text-lms-500 text-sm">
                  Oversee all courses and instructors
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-lms-200">
                <h3 className="text-xl font-medium text-lms-700 mb-4">System Settings</h3>
                <p className="text-lms-500 text-sm">
                  Configure platform settings and preferences
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}