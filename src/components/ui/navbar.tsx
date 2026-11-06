import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-lms-200 shadow-sm z-40 flex items-center justify-between px-6 sm:px-12">
      <Link
        href="/"
        className="flex items-center gap-3 font-bold text-lms-600 text-xl sm:text-2xl"
      >
        <span className="self-center">LMS</span>
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        <Link href="/courses" className="text-lms-500 hover:text-lms-600 transition-colors font-medium">
          Courses
        </Link>
        <Link href="/instructor" className="text-lms-500 hover:text-lms-600 transition-colors font-medium">
          Instructor
        </Link>
        <Link href="/admin" className="text-lms-500 hover:text-lms-600 transition-colors font-medium">
          Admin
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Link href="/login" className="text-lms-500 hover:text-lms-600 transition-colors font-medium">
          Login
        </Link>
        <Link href="/register" className="bg-lms-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-lms-700 transition-colors">
          Register
        </Link>
      </div>
    </header>
  );
};