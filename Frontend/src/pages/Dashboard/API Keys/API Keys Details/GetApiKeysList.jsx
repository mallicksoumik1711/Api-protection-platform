function GetApiKeysList() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">

      <h2 className="text-white font-medium mb-2">
        Fetch API Keys
      </h2>

      <p className="text-sm text-zinc-400 mb-6">
        Retrieve all API keys associated with this project.
      </p>

      <button className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-zinc-200">
        Fetch Keys
      </button>

    </div>
  );
}

export default GetApiKeysList;