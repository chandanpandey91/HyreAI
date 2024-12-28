import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <>
      <section className="relative min-h-screen w-screen">
        {/* Background Image */}
        <img
          alt="AI Trading Bots"
          src="https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-8392.jpg?semt=ais_hybrid"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Form Container */}
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen bg-black/50">
          <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
            {/* Logo */}
            <div className="mb-6 text-center">
              <a className="text-blue-600 font-bold text-2xl" href="#">
                HyreAI
              </a>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl text-center">
              Welcome to HyreAI
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 text-center">
              The smarter way to manage your hiring process with AI-driven insights and tools.
            </p>

            {/* SignIn Component */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <SignIn />
            </div>

            {/* Registration Form */}
            <form className="mt-10 grid gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-lg border-gray-300 bg-white text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-lg border-gray-300 bg-white text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-lg border-gray-300 bg-white text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-lg border-gray-300 bg-white text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-lg border-gray-300 bg-white text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="MarketingAccept"
                  className="ml-3 text-sm text-gray-600"
                >
                  I want to receive emails about events, product updates, and
                  company announcements.
                </label>
              </div>

              <p className="text-sm text-gray-500">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-blue-600 underline">
                  terms and conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 underline">
                  privacy policy
                </a>
                .
              </p>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Create Account
                </button>
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <a href="#" className="text-blue-600 underline">
                    Log in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
