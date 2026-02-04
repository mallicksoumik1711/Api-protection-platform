// import { Github, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router";

// export default function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <div className="fixed top-10 left-0 w-full flex justify-center z-50">
//       <nav
//         className="
//     flex items-center justify-between
//     w-[80%] max-w-4xl
//     rounded-xl
//     px-6 py-2

//     bg-white/10
//     backdrop-blur-sm

//     shadow-[0_8px_32px_rgba(0,0,0,0.35)]
//   "
//       >
//         {/* LEFT: Logo */}
//         <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
//           <span className="text-xl">🦊</span>
//           <span className="font-small text-gray-100">Bouncer</span>
//         </div>

//         {/* RIGHT: Actions */}
//         <div className="flex items-center gap-3">
//           <button
//             className="
//               flex items-center gap-1
//               px-4 py-2
//               text-sm font-medium
//               rounded-md
//               border border-white/20 text-white hover:bg-white/10
//               transition
//             "
//           >
//             Analyze
//             <ArrowRight size={14} />
//           </button>

//           <button
//             className="
//               w-9 h-9
//               flex items-center justify-center
//               rounded-md
//               border border-white/20 text-white hover:bg-white/10
//               transition
//             "
//           >
//             <Github size={18} />
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }

import { Github, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`
        fixed top-10 left-0 w-full flex justify-center z-50
        transition-transform duration-300 ease-out
        ${show ? "translate-y-0" : "-translate-y-32"}
      `}
    >
      <nav
        className="
          flex items-center justify-between
          w-[80%] max-w-4xl
          rounded-md
          px-6 py-2
          bg-white/10 backdrop-blur-sm
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        "
      >
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-xl">🦊</span>
          <span className="text-gray-100">Bouncer</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2 text-sm rounded-md border border-white/20 text-white hover:bg-white/10">
            Analyze
            <ArrowRight size={14} />
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10">
            <Github size={18} />
          </button>
        </div>
      </nav>
    </div>
  );
}
