import BackgroundDots from "../components/BackgroundDots";
import Navbar from "../components/Navbar";

function SignIn() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <BackgroundDots />
      <Navbar />
      {/* Login Card - centered with glassmorphism */}
      <div className="min-h-screen flex items-center justify-center px-5 sm:px-0 z-10 pt-32 pb-32">
        <div
          className="
            w-full max-w-md 
            backdrop-blur-xl bg-white/5 
            border border-white/10 
            rounded-2xl 
            shadow-2xl shadow-black/40
            p-8 sm:p-10
            transition-all duration-300
          "
        >
          <h1 className="text-3xl font-bold text-center mb-2 tracking-tight">
            Welcome back
          </h1>
          <p className="text-gray-400 text-center mb-8 text-sm">
            Sign in to continue
          </p>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="
                  w-full px-4 py-3.5 
                  bg-white/5 
                  border border-white/10 
                  rounded-lg 
                  text-white placeholder-gray-500 
                  focus:outline-none focus:border-indigo-500/50 
                  focus:bg-white/10 
                  transition-all duration-200
                "
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="
                  w-full px-4 py-3.5 
                  bg-white/5 
                  border border-white/10 
                  rounded-lg 
                  text-white placeholder-gray-500 
                  focus:outline-none focus:border-indigo-500/50 
                  focus:bg-white/10 
                  transition-all duration-200
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full py-3.5 
                bg-gradient-to-r from-indigo-600 to-purple-600 
                hover:from-indigo-500 hover:to-purple-500 
                rounded-lg font-medium 
                shadow-lg shadow-indigo-900/30 
                transition-all duration-300 
                mt-2
              "
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              className="
                flex items-center justify-center gap-3 
                w-full py-3.5 
                bg-white/5 
                border border-white/10 
                rounded-lg 
                hover:bg-white/10 
                transition-all duration-200
              "
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.44-3.39-7.44-7.57s3.345-7.57 7.44-7.57c2.33 0 3.916.89 4.785 1.685l3.257-3.135C18.747 1.09 15.647 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                />
              </svg>
              Google
            </button>

            <button
              className="
                flex items-center justify-center gap-3 
                w-full py-3.5 
                bg-white/5 
                border border-white/10 
                rounded-lg 
                hover:bg-white/10 
                transition-all duration-200
              "
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              GitHub
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
