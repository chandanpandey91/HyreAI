import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=1920&q=80')", // Replace this URL with your preferred background image
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
        <header className="mb-10">
          <h1 className="text-4xl font-bold sm:text-5xl text-white">
            Welcome to <span className="text-yellow-300">HyreAI</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Your AI-powered solution for mock interviews.
          </p>
        </header>

        <main>
          <button className="px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-500 transition">
            <a
              href="https://hyreai.vercel.app/dashboard"
              rel="noopener noreferrer"
            >
              Visit Our Website
            </a>
          </button>
        </main>
      </div>

      <footer className="mt-10 text-sm text-gray-300">
        © {new Date().getFullYear()} HyreAI. All rights reserved.
      </footer>
    </div>
  );
}
