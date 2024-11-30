import { forwardRef, useEffect } from "react";
import movieAppJPG from "../assets/movie-app-jpg.jpg";
import timerAppJPG from "../assets/timer-app-jpg.jpg";
import notebookAppJPG from "../assets/notebook-capure.jpg";
import quizzerAppJPG from "../assets/quizzer-io.jpg";

const Projects = forwardRef((props, ref) => {
  const aboutItemStyle =
    "bg-blue-950 text-center text-white p-4 rounded-lg flex-1 sm:hover:bg-transparent  border-2 border-blue-950 hover:border-blue-600 transition-all  duration-500 h-80";

  useEffect(() => {
    const projects = document.querySelector("#projects-container");
    projects.style.overflow = "hidden";
    projects.style.overflowY = "scroll";
    projects.style.scrollBar = "none";
    return () => {
      projects.style.overflow = "unset"; // Reset when component unmounts
    };
  }, []);

  return (
    <div id="projects" ref={ref} className="h-screen">
      <header className="flex flex-col justify-center items-center gap-1 text-slate-50">
        <p className="mt-4 text-slate-500">My recent work</p>
        <h1 className="font-bold text-blue-600 text-lg">Projects</h1>
      </header>
      <div className="flex justify-center items-center">
        <div
          id="projects-container"
          className=" shadow-inner shadow-slate-900 md:shadow-none h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/5 p-5"
        >
          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={movieAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Movie App</h3>
              <p className="font-extralight">JS HTML CSS</p>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  href="https://github.com/maximo445/mov-io"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://master--phenomenal-sprite-1e0c0e.netlify.app/"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Visit
                </a>
              </div>
            </div>
          </span>

          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={notebookAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">ProNote</h3>
              <p className="font-extralight">React JS Tailwind CSS</p>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  href="https://github.com/maximo445/note-project-manager"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://maximo445.github.io/note-project-manager/"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Visit
                </a>
              </div>
            </div>
          </span>

          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={quizzerAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Quizzer</h3>
              <p className="font-extralight">React JS Tailwind CSS</p>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  href="https://github.com/maximo445/quizzer-io"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://maximo445.github.io/quizzer-io/"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Visit
                </a>
              </div>
            </div>
          </span>

          <span className={aboutItemStyle}>
            <img className="rounded-xl" src={timerAppJPG} alt="" />
            <div className="pt-8 flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg ">Timer App</h3>
              <p className="font-extralight">React Tailwind</p>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  href="https://github.com/maximo445/timer"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://maximo445.github.io/timer/"
                  className="border-2 border-blue-600 transition-all  duration-500 px-3 py-1 rounded-lg hover:bg-slate-300 hover:border-slate-300 hover:text-slate-700"
                >
                  Visit
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
