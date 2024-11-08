import { forwardRef } from "react";

const Tools = forwardRef((props, ref) => {
  const toolsStyle =
    "hover:bg-transparent  border-2 border-blue-950 hover:border-blue-600 transition-all  duration-500";

  return (
    <div id="tools" ref={ref} className="h-screen flex">
      <div className=" flex flex-col items-center justify-center text-center w-full">
        <div className={`w-4/5 bg-blue-950 p-7 rounded-xl ${toolsStyle}`}>
          <h2 className="text-blue-400 font-bold text-lg mb-6">
            Frontend Development
          </h2>
          <ul className=" grid grid-cols-2 gap-4 text-slate-100">
            <li>
              <h2>HTML</h2>
              <p>Experienced</p>
            </li>
            <li>
              <h2>JavaScript</h2>
              <p>Intermideate</p>
            </li>
            <li>
              <h2>React JS</h2>
              <p>Beginner</p>
            </li>
            <li>
              <h2>CSS</h2>
              <p>Intermediate</p>
            </li>
            <li>
              <h2>Bootstrap</h2>
              <p>Beginner</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

Tools.displayName = "Tools";

export default Tools;
