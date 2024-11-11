function Navigation({
  toHome,
  toContact,
  toAbout,
  toTools,
  toProjects,
  activeSection,
}) {
  const onSection = "bg-blue-500";

  return (
    <ul className="flex mb-4 py-2 px-5 gap-3  fixed bottom-0 left-1/2 transform -translate-x-1/2 text-slate-50 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
      <li>
        <button
          className={`h-8 w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "home" ? onSection : ""
          }`}
          onClick={toHome}
        >
          H
        </button>
      </li>
      <li>
        <button
          className={`h-8 w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "about" ? onSection : ""
          }`}
          onClick={toAbout}
        >
          A
        </button>
      </li>
      <li>
        <button
          className={`h-8 w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "tools" ? onSection : ""
          }`}
          onClick={toTools}
        >
          C
        </button>
      </li>
      <li>
        <button
          className={`h-8 w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "projects" ? onSection : ""
          }`}
          onClick={toProjects}
        >
          P
        </button>
      </li>
      <li>
        <button
          className={`h-8 w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "contact" ? onSection : ""
          }`}
          onClick={toContact}
        >
          I
        </button>
      </li>
    </ul>
  );
}

export default Navigation;
