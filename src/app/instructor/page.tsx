import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";

interface Course {
  id: string;
  title: string;
  students: number;
  progress: number;
  lessons: number;
  thumbnail: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "React Fundamentals",
    students: 1248,
    progress: 87,
    lessons: 42,
    thumbnail: "/course-react.svg",
  },
  {
    id: "2",
    title: "Next.js Masterclass",
    students: 892,
    progress: 63,
    lessons: 35,
    thumbnail: "/course-nextjs.svg",
  },
  {
    id: "3",
    title: "TypeScript for Beginners",
    students: 602,
    progress: 45,
    lessons: 28,
    thumbnail: "/course-ts.svg",
  },
];

export default function InstructorDashboard() {
  return (
    <div className="min-h-screen bg-lms-50">
      <Sidebar />

      <div className="ml-64 min-h-screen">
        <Navbar />

        <main className="px-6 py-16 sm:px-12">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col lg:flex-row gap-6 mb-8">

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-lms-800">Instructor Dashboard</h1>
                <p className="text-lms-500 mt-1">Manage your courses and track student progress</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="bg-lms-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-lms-700 transition-colors"
                >
                  Create New Course
                </button>
                <button
                  className="bg-lms-100 text-lms-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-lms-200 transition-colors"
                >
                  Settings
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-sm p-6 border border-lms-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-24 w-full rounded-lg overflow-hidden mb-4">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-medium text-lms-800 mb-2">{course.title}</h3>

                  <div className="flex justify-between text-sm text-lms-500 mb-3">
                    <span>{course.students} students</span>
                    <span>{course.lessons} lessons</span>
                  </div>

                  <div className="bg-lms-100 rounded-full h-2.5 w-full">
                    <div
                      className="bg-lms-600 h-2.5 rounded-full transition-width duration-1000"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-lms-400 mt-1">{course.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}