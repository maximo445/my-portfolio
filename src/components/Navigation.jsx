import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faClipboardList,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
    <ul className="w-96 md:w-72 h-20 md:h-12 flex items-center justify-around mb-4 py-2 px-5 gap-3  fixed bottom-0 left-1/2 transform -translate-x-1/2 text-slate-50 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
      <li>
        <button
          className={`h-14 w-14 md:h-8 md:w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "home" ? onSection : ""
          }`}
          onClick={toHome}
        >
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </button>
      </li>
      <li>
        <button
          className={`h-14 w-14 md:h-8 md:w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "about" ? onSection : ""
          }`}
          onClick={toAbout}
        >
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </button>
      </li>
      <li>
        <button
          className={`h-14 w-14 md:h-8 md:w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "tools" ? onSection : ""
          }`}
          onClick={toTools}
        >
          <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
        </button>
      </li>
      <li>
        <button
          className={`h-14 w-14 md:h-8 md:w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "projects" ? onSection : ""
          }`}
          onClick={toProjects}
        >
          <FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon>
        </button>
      </li>
      <li>
        <button
          className={`h-14 w-14 md:h-8 md:w-8 transition duration-500 rounded-full delay-150 hover:bg-slate-400 ${
            activeSection === "contact" ? onSection : ""
          }`}
          onClick={toContact}
        >
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </button>
      </li>
    </ul>
  );
}

export default Navigation;
