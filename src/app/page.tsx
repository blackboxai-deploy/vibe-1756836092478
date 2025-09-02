export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 dark:from-gray-900 dark:to-red-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 mb-4">
              Hello World
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Welcome to your beautiful Hello World page built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-500 mx-auto rounded-full"></div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-600 dark:text-red-400 text-xl font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">Built with Next.js for optimal performance</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-rose-600 dark:text-rose-400 text-xl font-bold">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Beautiful</h3>
              <p className="text-gray-600 dark:text-gray-300">Styled with Tailwind CSS for modern design</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-600 dark:text-red-400 text-xl font-bold">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Modern</h3>
              <p className="text-gray-600 dark:text-gray-300">TypeScript for type-safe development</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-medium rounded-lg shadow-lg hover:from-red-700 hover:to-rose-700 transition-all duration-300 cursor-pointer">
              <span>Get Started</span>
              <span className="ml-2">→</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}