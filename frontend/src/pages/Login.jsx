export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-900/70 backdrop-blur-md shadow-xl ring-1 ring-gray-800 p-8 hover:shadow-2xl transition">
        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        <p className="mt-1 text-sm text-gray-400">
          Log in to continue your journey.
        </p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm text-gray-300">Email</span>
            <input
              type="email"
              className="mt-1 w-full rounded-lg bg-gray-800/60 text-white px-3 py-2 ring-1 ring-gray-700 focus:outline-none focus:ring-2 focus:ring-brand transition"
              placeholder="you@company.com"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Password</span>
            <input
              type="password"
              className="mt-1 w-full rounded-lg bg-gray-800/60 text-white px-3 py-2 ring-1 ring-gray-700 focus:outline-none focus:ring-2 focus:ring-brand transition"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-brand to-brand-dark text-white font-medium hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-brand hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
