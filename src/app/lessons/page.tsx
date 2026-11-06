import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";

export default function LessonManagement() {
  return (
    <div className="min-h-screen bg-lms-50">
      <Sidebar />

      <div className="ml-64 min-h-screen">
        <Navbar />

        <main className="px-6 py-16 sm:px-12">
          <div className="max-w-7xl mx-auto">

            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-lms-800">Lesson Management</h1>
              <button
                className="bg-lms-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-lms-700 transition-colors"
              >
                Create New Lesson
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-lms-200">

              <h3 className="text-xl font-medium text-lms-700 mb-4">Available Lessons</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-lms-200">
                      <th className="text-left text-lms-600 font-medium">Lesson</th>
                      <th className="text-left text-lms-600 font-medium">Duration</th>
                      <th className="text-left text-lms-600 font-medium">Progress</th>
                      <th className="text-right text-lms-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-lms-100">
                      <td className="py-4 font-medium text-lms-800">Introduction to React</td>
                      <td className="py-4 text-lms-500">12:30</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-lms-600"></span>
                          <span className="text-lms-500">80%</span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-lms-600 text-sm hover:underline">Edit</button>
                        <button className="text-lms-400 text-sm hover:underline ml-2">Delete</button>
                      </td>
                    </tr>
                    <tr className="border-b border-lms-100">
                      <td className="py-4 font-medium text-lms-800">Components & Props</td>
                      <td className="py-4 text-lms-500">18:45</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-lms-500"></span>
                          <span className="text-lms-500">50%</span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-lms-600 text-sm hover:underline">Edit</button>
                        <button className="text-lms-400 text-sm hover:underline ml-2">Delete</button>
                      </td>
                    </tr>
                    <tr className="border-b border-lms-100">
                      <td className="py-4 font-medium text-lms-800">State & Hooks</td>
                      <td className="py-4 text-lms-500">25:12</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-lms-400"></span>
                          <span className="text-lms-500">25%</span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-lms-600 text-sm hover:underline">Edit</button>
                        <button className="text-lms-400 text-sm hover:underline ml-2">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}