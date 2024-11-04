import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Assignment Help
            </h1>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-blue-600">98.2%</span>
                  <p className="text-gray-600">Success Rate</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-blue-600">9/10</span>
                  <p className="text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Get Assignment Instantly</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <textarea
                  placeholder="Assignment Details"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src="/student-working.svg"
              alt="Students studying"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}