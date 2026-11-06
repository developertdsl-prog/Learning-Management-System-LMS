import { Navbar } from "@/components/ui/navbar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-lms-50 p-6">
      <Navbar />

      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-lms-200">

          <div className="mb-6">
            <div className="h-20 w-20 rounded-full bg-lms-200 flex items-center justify-center mb-4">
              <span className="text-lms-600 font-medium">UH</span>
            </div>
            <h2 className="text-2xl font-bold text-lms-800">User Name</h2>
            <p className="text-lms-500">user@lms.com</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-lms-700">Account Settings</h3>
              <ul className="space-y-2 text-lms-600">
                <li>
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">user@lms.com</span>
                </li>
                <li>
                  <span className="font-medium">Member since:</span>
                  <span className="ml-2">January 2026</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-lms-700">Learning Progress</h3>
              <div className="bg-lms-100 rounded-full h-8 w-32">
                <div
                  className="bg-lms-600 h-8 rounded-full transition-width duration-1000"
                  style={{ width: "72%" }}
                />
              </div>
              <p className="text-sm text-lms-500 mt-2">72% complete across 12 courses</p>
            </div>

            <button
              className="w-full bg-lms-600 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-lms-700 transition-colors"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}