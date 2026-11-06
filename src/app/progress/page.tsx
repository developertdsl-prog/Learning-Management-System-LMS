import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-lms-50">
      <Sidebar />

      <div className="ml-64 min-h-screen">
        <Navbar />

        <main className="px-6 py-16 sm:px-12">
          <div className="max-w-7xl mx-auto">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-lms-800">Learning Progress</h1>
              <p className="text-lms-500 mt-1">Track your learning journey</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Overall Progress Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-lms-200">
                <h3 className="text-xl font-medium text-lms-700 mb-3">Overall Progress</h3>
                <div className="bg-lms-100 rounded-full h-8 w-32">
                  <div
                    className="bg-lms-600 h-8 rounded-full transition-width duration-1000"
                    style={{ width: "72%" }}
                  />
                </div>
                <div className="flex justify-between text-sm text-lms-500 mt-2">
                  <span>72% complete</span>
                  <span>12 of 17 courses</span>
                </div>
              </div>

              {/* Streak Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-lms-200">
                <h3 className="text-xl font-medium text-lms-700 mb-3">Streak</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-lms-600">12</span>
                  <div>
                    <span className="text-lms-500">day streak</span>
                    <span className="text-lms-400">learning</span>
                  </div>
                </div>
              </div>

              {/* Completed Lessons Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-lms-200">
                <h3 className="text-xl font-medium text-lms-700 mb-3">Completed Lessons</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-lms-600">47</span>
                  <span className="text-lms-500">lessons</span>
                </div>
              </div>
            </div>

            {/* Course Progress Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Array.from({ length: 5 }, (_, i) => ({
                id: i + 1,
                name: `Course ${i + 1}`,
                progress: 60 + i * 8,
              })).map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-sm p-6 border border-lms-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-lms-800">{course.name}</h4>
                    <span className="text-xs text-lms-400">{course.progress}% complete</span>
                  </div>
                  <div className="bg-lms-100 rounded-full h-2 w-full">
                    <div
                      className="bg-lms-600 h-2 rounded-full transition-width duration-1000"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}