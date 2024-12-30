import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <>
      <section className="relative min-h-screen w-screen">
        {/* Background Image */}
        <img
          alt="AI Trading Bots"
          src="https://www.shutterstock.com/image-vector/artificial-intelligence-circuit-electric-line-600nw-2465096659.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Form Container directly on background with transparency and blur */}
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen">
          <div className="max-w-lg w-full p-8 bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg">
            {/* Logo */}
            <div className="mb-6 text-center">
              <a className="text-blue-600 font-bold text-2xl" href="#">
                HyreAI
              </a>
            </div>

            {/* Heading */}
            <p className="mt-4 text-lg leading-relaxed text-white text-center">
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
