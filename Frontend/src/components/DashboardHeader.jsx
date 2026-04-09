function DashboardHeader({ tag, title, features, description }) {
  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
        {tag}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white py-2">{title}</h1>
        </div>

        {/* RIGHT SIDE FEATURES */}
        <div className="hidden lg:block overflow-hidden">
          <div className="flex whitespace-nowrap text-sm text-zinc-400">
            <div className="flex gap-6 mr-6">
              {features?.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-zinc-400 max-w-2xl mb-8">{description}</p>
    </div>
  );
}

export default DashboardHeader;
