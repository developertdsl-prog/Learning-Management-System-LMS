import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside
      className="fixed left-0 top-0 h-screen w-64 bg-lms-50 border-r border-lms-200 shadow-lg transform -translate-x-0 sm:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col"
    >
      <div className="h-full flex flex-col py-2">
        <Link
          href="/"
          className="flex h-14 items-center justify-center gap-3 text-lms-600 hover:text-lms-500 font-medium transition-colors sm:justify-start"
        >
          <span className="self-center text-lg font-bold">LMS</span>
        </Link>

        <nav className="flex-1 flex flex-col gap-1 mt-4">
          <Link
            href="/"
            className="flex h-12 items-center justify-center rounded-lg px-3 py-2 text-lms-600 hover:bg-lms-100 transition-colors font-medium"
          >
            <span className="self-center">Dashboard</span>
          </Link>

          <Link
            href="/courses"
            className="flex h-12 items-center justify-center rounded-lg px-3 py-2 text-lms-600 hover:bg-lms-100 transition-colors font-medium"
          >
            <span className="self-center">Courses</span>
          </Link>

          <Link
            href="/instructor"
            className="flex h-12 items-center justify-center rounded-lg px-3 py-2 text-lms-600 hover:bg-lms-100 transition-colors font-medium"
          >
            <span className="self-center">Instructor</span>
          </Link>

          <Link
            href="/admin"
            className="flex h-12 items-center justify-center rounded-lg px-3 py-2 text-lms-600 hover:bg-lms-100 transition-colors font-medium"
          >
            <span className="self-center">Admin</span>
          </Link>
        </nav>

        <div className="mt-auto flex h-12 items-center justify-center rounded-lg px-3 py-2 text-lms-500 text-xs font-medium">
          <span>User</span>
        </div>
      </div>
    </aside>
  );
};