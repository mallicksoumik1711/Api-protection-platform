import TablesOfContents from "../TableOfContents";

function DocsFavourites() {
  const sections = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "adding-favourites",
      label: "Adding Favorites",
    },
    {
      id: "removing-favourites",
      label: "Removing Favorites",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-xl font-semibold">Overview</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Favorites allow you to quickly access projects that you use most
              frequently. By marking a project as a favorite, it becomes easier
              to locate without searching through your complete project list.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Favorite projects remain fully functional and continue to behave
              exactly like regular projects. The Favorites feature simply
              provides a convenient way to organize and access important
              projects.
            </p>
          </section>

          {/* Adding Favorites */}
          <section id="adding-favourites" className="mt-8">
            <h2 className="text-xl font-semibold">Adding Favorites</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Projects can be added to Favorites directly from the project card
              or project actions menu.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Once marked as a favorite, the project will appear in the
              Favorites section for quick access.
            </p>

            <div className="mt-6 overflow-x-auto">
              <pre className="text-sm text-zinc-300">
                {`1. Open a project
2. Click the actions menu
3. Select "Add to Favorites"
4. The project appears in Favorites`}
              </pre>
            </div>
          </section>

          {/* Removing Favorites */}
          <section id="removing-favourites" className="mt-8">
            <h2 className="text-xl font-semibold">Removing Favorites</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Projects can be removed from Favorites at any time. Removing a
              project from Favorites does not delete the project or affect its
              configuration.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              The project will remain available in your Projects list and can be
              added back to Favorites whenever needed.
            </p>

            <div className="mt-6 overflow-x-auto">
              <pre className="text-sm text-zinc-300">
                {`1. Open a favorite project
2. Click the actions menu
3. Select "Remove from Favorites"
4. The project is removed from Favorites`}
              </pre>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <TablesOfContents sections={sections} />
      </div>
    </div>
  );
}

export default DocsFavourites;
