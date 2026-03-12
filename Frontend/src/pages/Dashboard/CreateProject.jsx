import { useState } from "react";
import { integrationCode } from "../../utils/HelperFunctions/integrationCode"

function CreateProject() {
  const [framework, setFramework] = useState("Node / Express");

  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
            Project Setup
          </p>

          <h1 className="text-3xl font-semibold text-white mb-3">
            Create Project
          </h1>

          <p className="text-zinc-400 max-w-2xl">
            Create a project to start protecting and monitoring your APIs. After
            creating the project, integrate the middleware into your backend to
            enable request protection and analytics.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-6">
            {/* Project Name */}
            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">Project Name</h2>

              <p className="text-sm text-zinc-400 mb-4">
                The visible name of your project in the dashboard.
              </p>

              <input
                type="text"
                placeholder="My CRUD API"
                className="w-full bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Description */}
            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">
                Project Description{" "}
                <span className="text-zinc-500">(optional)</span>
              </h2>

              <p className="text-sm text-zinc-400 mb-4">
                Short description about what this API project does.
              </p>

              <textarea
                rows="3"
                placeholder="Simple user CRUD API"
                className="w-full bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Backend URL */}
            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">
                Backend API Base URL <span className="text-red-400">★</span>
              </h2>

              <p className="text-sm text-zinc-400 mb-4">
                The base URL where your backend API is running.
              </p>

              <input
                type="text"
                placeholder="https://api.mycrudapp.com or http://localhost:5000"
                className="w-full bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Framework */}

            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">
                Framework <span className="text-zinc-500">(optional)</span>
              </h2>

              <p className="text-sm text-zinc-400 mb-4">
                Select the backend framework used for this API.
              </p>

              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-500"
              >
                <option>Node / Express</option>
                <option>FastAPI</option>
                <option>Django</option>
                <option>Spring Boot</option>
                <option>Other</option>
              </select>
            </div>

            {/* Environment */}
            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">Environment</h2>

              <p className="text-sm text-zinc-400 mb-4">
                Select the environment where this API will run.
              </p>

              <select className="w-full bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-500">
                <option>Development</option>
                <option>Production</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-zinc-200 transition">
                Create Project
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <h2 className="text-white font-medium mb-2">
              Framework Integration
            </h2>

            <p className="text-sm text-zinc-400 mb-4">
              After creating your project, add this middleware to your backend
              to start protecting API requests.
            </p>

            <div className="bg-black border border-zinc-800 rounded-md p-4">
              <pre className="text-sm text-green-400 overflow-x-auto">
                <code>{integrationCode[framework]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
