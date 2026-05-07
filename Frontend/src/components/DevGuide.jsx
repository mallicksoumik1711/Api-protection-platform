import { useState } from "react";
import { useNavigate } from "react-router";
import { BadgeAlert, MoveRight, Triangle } from "lucide-react";

function DevGuide() {
  const [active, setActive] = useState("middleware");
  const navigate = useNavigate();

  const tabs = {
    middleware: {
      title: "Middleware Placement",
      desc: "Add middleware before defining routes.",
      note: "This code is provided in the Integration section.",
      route: "/integration",
      code: `app.use(cors());
app.use(express.json());

// middleware
app.use((req, res, next) => {
  // validation logic
});

// routes
app.use("/api/users", userRoute);`,
    },

    token: {
      title: "Token Generation",
      desc: "Generate token only after user creation/login.",
      code: `const token = await generateToken(user.id);

res.json({
  user,
  token,
});`,
    },

    logic: {
      title: "Token Utility",
      desc: "Keep token logic separate from controllers.",
      note: "You can find this utility in the Integration section.",
      route: "/integration",
      code: `const generateToken = async (userId) => {
  const res = await fetch("/apiauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "API_KEY",
    },
    body: JSON.stringify({
      projectId: "PROJECT_ID",
      userId,
    }),
  });

  const data = await res.json();
  return data.token;
};`,
    },

    usage: {
      title: "Using Bearer Token",
      desc: "Send token in every protected request.",
      code: `fetch("/api/users", {
  headers: {
    Authorization: \`Bearer \${token}\`
  }
});`,
    },
  };

  return (
    <div className="max-w-6xl mx-auto mt-12">
      {/* TAB HEADER */}
      <div className="flex gap-2 overflow-x-auto">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 text-sm whitespace-nowrap transition
              ${
                active === key
                  ? "text-white border-b-1 border-white"
                  : "text-zinc-500 hover:text-white"
              }`}
          >
            {tabs[key].title}
          </button>
        ))}
      </div>

      {tabs[active].note && (
        <div className="flex items-center justify-between gap-3 bg-zinc-900/60 border border-zinc-900 rounded-md px-3 py-2 text-xs text-zinc-400 mt-5">
          <div className="flex items-center gap-2">
            <BadgeAlert size={14} className="text-amber-500/90" />
            <span>{tabs[active].note}</span>
          </div>

          <button
            onClick={() => navigate(tabs[active].route)}
            className="text-white hover:underline text-xs flex items-center gap-1 cursor-pointer"
          >
            <span>Integration</span> <MoveRight size={14} />
          </button>
        </div>
      )}

      {/* CONTENT */}
      <div className="rounded-lg mt-4 space-y-4 mb-5">
        <p className="text-sm text-zinc-400">{tabs[active].desc}</p>

        <pre className="bg-zinc-950/90 rounded-md p-4 text-[13px] text-zinc-300 overflow-x-auto">
          {tabs[active].code}
        </pre>
      </div>
    </div>
  );
}

export default DevGuide;
