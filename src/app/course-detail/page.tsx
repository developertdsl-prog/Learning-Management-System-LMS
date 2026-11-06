import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface Course {
  id: string;
  title: string;
  instructor: string;
  students: number;
  progress: number;
  lessons: Lesson[];
  thumbnail: string;
}

const course: Course = {
  id: "1",
  title: "React Fundamentals",
  instructor: "Sarah Johnson",
  students: 1248,
  progress: 45,
  lessons: [
    { id: "1", title: "Introduction to React", duration: "12:30", completed: true },
    { id: "2", title: "Components & Props", duration: "18:45", completed: true },
    { id: "3", title: "State & Hooks", duration: "25:12", completed: false },
    { id: "4", title: "Effect Hook", duration: "15:20", completed: false },
    { id: "5", title: "Routing with React Router", duration: "20:45", completed: false },
    { id: "6", title: "Form Handling", duration: "16:30", completed: false },
  ],
  thumbnail: "/course-react.svg",
};

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-lms-50">
      <Sidebar />

      <div className="ml-64 min-h-screen">
        <Navbar />

        <main className="px-6 py-16 sm:px-12">
          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-8 items-start">

              <div>
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-64 w-full rounded-lg object-cover"
                />
                <div className="mt-4">
                  <p className="text-lms-500 text-sm">By {course.instructor}</p>
                  <p className="text-lms-600 font-medium mt-1"> {course.students} students enrolled</p>
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-lms-800 mb-4">{course.title}</h1>

                <div className="mb-6">
                  <p className="text-lms-600 mb-2">Course Progress</p>
                  <div className="bg-lms-100 rounded-full h-2.5 w-full">
                    <div
                      className="bg-lms-600 h-2.5 rounded-full transition-width duration-1000"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-lms-500 mt-2">
                    <span>{course.progress}% complete</span>
                    <span>{course.students} enrolled</span>
                  </div>
                </div>

                <h2 className="text-xl font-medium text-lms-700 mb-4">Lessons</h2>
                <div className="space-y-2">
                  {course.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`
                        flex items-center justify-between p-3 rounded-lg ${
                          lesson.completed
                            ? "bg-lms-100 text-lms-700"
                            : "bg-lms-50 text-lms-600"
                        }
                      `}
                    >
                      <span className="font-medium">{lesson.title}</span>
                      <span className="text-xs text-lms-400">
                        {lesson.duration} {'•' } {lesson.completed ? "Completed" : "Not started"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}