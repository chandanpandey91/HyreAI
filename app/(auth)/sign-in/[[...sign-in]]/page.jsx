import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <>
      <section className="relative min-h-screen w-screen">
        {/* Background Image */}
        <img
          alt="AI Trading Bots"
          src="https://i.insider.com/62b31453c38f470019c6b507?width=700"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Container */}
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen bg-black/50">
          <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
            {/* Logo */}
            <div className="mb-6 text-center">
              <a className="text-blue-600 font-bold text-2xl" href="#">
                HyreAI
              </a>
            </div>

            {/* Heading */}
            {/* <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl text-center">
              Welcome to HyreAI
            </h1> */}
            <p className="mt-4 text-lg leading-relaxed text-gray-600 text-center">
              Sign in to access your AI-powered hiring tools.
            </p>

            {/* SignIn Component */}
            <div className="mt-10 flex items-center justify-center">
              <SignIn />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
