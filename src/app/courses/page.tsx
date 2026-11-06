import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";

interface Course {
  id: string;
  title: string;
  instructor: string;
  students: number;
  progress: number;
  thumbnail: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "React Fundamentals",
    instructor: "Sarah Johnson",
    students: 1248,
    progress: 45,
    thumbnail: "/course-react.svg",
  },
  {
    id: "2",
    title: "Next.js Masterclass",
    instructor: "Michael Chen",
    students: 892,
    progress: 63,
    thumbnail: "/course-nextjs.svg",
  },
  {
    id: "3",
    title: "TypeScript for Beginners",
    instructor: "Emily Williams",
    students: 602,
    progress: 38,
    thumbnail: "/course-ts.svg",
  },
  {
    id: "4",
    title: "Tailwind CSS Workshop",
    instructor: "David Rodriguez",
    students: 431,
    progress: 52,
    thumbnail: "/course-tailwind.svg",
  },
  {
    id: "5",
    title: "Node.js Backend",
    instructor: "Chris Lee",
    students: 315,
    progress: 27,
    thumbnail: "/course-node.svg",
  },
  {
    id: "6",
    title: "Vue.js Complete Guide",
    instructor: "Lisa Wang",
    students: 210,
    progress: 15,
    thumbnail: "/course-vue.svg",
  },
  {
    id: "7",
    title: "CSS Animations Mastery",
    instructor: "Robert Davis",
    students: 156,
    progress: 80,
    thumbnail: "/course-animations.svg",
  },
  {
    id: "8",
    title: "Git & Version Control",
    instructor: "Maria Garcia",
    students: 942,
    progress: 72,
    thumbnail: "/course-git.svg",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-lms-50">
      {/* Desktop sidebar on large screens */}
      <Sidebar />

      <div className="ml-64 min-h-screen">
        <Navbar />

        <main className="px-6 py-16 sm:px-12">
          <div className="max-w-7xl mx-auto">

            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-lms-800">Course Library</h1>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="rounded-lg border border-lms-300 px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-lms-600"
                  placeholder="Search courses..."
                />
                <select
                  className="rounded-lg border border-lms-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lms-600"
                >
                  <option>All Categories</option>
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Data Science</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-lms-200"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-lms-800 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-lms-500 mt-1">
                      {course.instructor} • {course.students} students
                    </p>
                  </div>
                  <div className="p-4 border-t border-lms-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-lms-500">Progress: {course.progress}%</span>
                      <span className="text-xs text-lms-400">{course.students} enrolled</span>
                    </div>
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