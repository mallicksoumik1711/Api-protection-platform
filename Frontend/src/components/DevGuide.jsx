import { useState } from "react";

function DevGuide() {
  const [active, setActive] = useState("middleware");

  const tabs = {
    middleware: {
      title: "Middleware Placement",
      desc: "Add middleware before defining routes.",
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
      <div className="flex gap-2 border-b border-zinc-800 overflow-x-auto">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 text-sm whitespace-nowrap transition
              ${
                active === key
                  ? "text-white border-b-2 border-white"
                  : "text-zinc-500 hover:text-white"
              }`}
          >
            {tabs[key].title}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="bg-zinc-950/60 border border-zinc-800 rounded-lg p-5 mt-4 space-y-4">
        <p className="text-sm text-zinc-400">{tabs[active].desc}</p>

        <pre className="bg-zinc-950/80 border border-zinc-800 rounded-md p-4 text-[13px] text-zinc-300 overflow-x-auto">
          {tabs[active].code}
        </pre>
      </div>
    </div>
  );
}

export default DevGuide;
