import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";

const Tools = forwardRef((props, ref) => {
  const toolsStyle =
    "hover:bg-transparent  border-2 border-blue-950 hover:border-blue-600 transition-all  duration-500";

  return (
    <div id="tools" ref={ref} className="h-screen flex">
      <div className=" flex flex-col items-center justify-center text-center w-full">
        <div
          className={`w-80 md:w-96 flex flex-col justify-center items-center bg-blue-950 p-7 rounded-xl ${toolsStyle}`}
        >
          <h2 className="text-blue-400 font-bold text-lg mb-6">
            Frontend Development
          </h2>
          <ul className=" grid grid-cols-2 gap-4 text-slate-100">
            <li className="flex justify-start items-center gap-5 text-sm">
              <FontAwesomeIcon icon={faHtml5} size="2x" color="yellow" />
              <div className="text-left">
                <h2>HTML</h2>
                <p>Experienced</p>
              </div>
            </li>
            <li className="flex justify-start items-center gap-5 text-sm">
              <FontAwesomeIcon icon={faJs} size="2x" color="yellow" />
              <div className="text-left">
                <h2>JavaScript</h2>
                <p>Intermideate</p>
              </div>
            </li>
            <li className="flex justify-start items-center gap-5 text-sm">
              <FontAwesomeIcon icon={faReact} size="2x" color="yellow" />
              <div className="text-left">
                <h2>Reacct JS</h2>
                <p>Beginner</p>
              </div>
            </li>
            <li className="flex justify-start items-center gap-5 text-sm">
              <FontAwesomeIcon icon={faCss3Alt} size="2x" color="yellow" />
              <div className="text-left">
                <h2>CSS</h2>
                <p>Intermediate</p>
              </div>
            </li>
            <li className="flex justify-start items-center gap-5 text-sm">
              <FontAwesomeIcon icon={faWind} size="2x" color="yellow" />
              <div className="text-left">
                <h2>Tailwind CSS</h2>
                <p>Interermiate</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

Tools.displayName = "Tools";

export default Tools;
