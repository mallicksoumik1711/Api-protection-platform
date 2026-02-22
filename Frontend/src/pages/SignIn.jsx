import BackgroundDots from "../components/BackgroundDots";
import Navbar from "../components/Navbar";
import {handleLogin} from "../api/auth";
import {useNavigate} from "react-router-dom";

function SignIn() {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(!email || !password){
      console.error("Email and password are required");
      return;
    }
    try{
      const submission = await handleLogin(email, password);
      console.log("Login response:", submission);
      navigate("/frontpage"); 
    }
    catch(err){
      console.log("Login error:", err);
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <BackgroundDots />
      <Navbar />
      {/* Login Card - centered with glassmorphism */}
      <div className="min-h-screen flex items-center justify-center px-5 sm:px-0 z-10 pt-32 pb-32">
        <div
          className="
            w-full max-w-md 
            backdrop-blur-md bg-white/5 
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
          <form className="space-y-5" onSubmit={handleSubmit}>
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
                flex items-center justify-center gap-3 
                w-full py-3.5 
                bg-white/5 
                border border-white/10 
                rounded-lg 
                hover:bg-white/10 
                transition-all duration-200
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

          <p className="text-center text-gray-500 text-sm mt-8">
            Don't have an account?{" "}
            <a
              href="/signup"
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
