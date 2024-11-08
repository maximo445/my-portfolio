import { forwardRef } from "react";
import movieAppJPG from "../assets/movie-app-jpg.jpg";

const Projects = forwardRef((props, ref) => {
  const aboutItemStyle =
    "bg-blue-950 text-center text-white p-4 rounded-lg flex-1 hover:bg-transparent  border-2 border-blue-950 hover:border-blue-600 transition-all  duration-500";
  return (
    <div id="projects" ref={ref} className="h-screen">
      <header className="flex flex-col justify-center items-center gap-1 text-slate-50">
        <p className="mt-4 text-slate-500">My recent work</p>
        <h1 className="font-bold text-blue-600 text-lg">Projects</h1>
      </header>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/5 p-5">
          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={movieAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Movie App</h3>
              <p className="font-extralight">JS HTML CSS</p>
              <button className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700">
                Github
              </button>
            </div>
          </span>
          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={movieAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Movie App</h3>
              <p className="font-extralight">JS HTML CSS</p>
              <button className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700">
                Github
              </button>
            </div>
          </span>
          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={movieAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Movie App</h3>
              <p className="font-extralight">JS HTML CSS</p>
              <button className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700">
                Github
              </button>
            </div>
          </span>
          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={movieAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Movie App</h3>
              <p className="font-extralight">JS HTML CSS</p>
              <button className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700">
                Github
              </button>
            </div>
          </span>
          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={movieAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Movie App</h3>
              <p className="font-extralight">JS HTML CSS</p>
              <button className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700">
                Github
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
