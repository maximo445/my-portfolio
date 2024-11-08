import { forwardRef } from "react";
import homeImage from "../assets/reg-photo.png";

const Home = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="h-screen flex flex-col justify-between items-center pt-11"
    >
      <header className="flex flex-col justify-center items-center gap-1 text-slate-50">
        <p>Hello, I'am</p>
        <h1 className="font-bold text-5xl">Maximo Brito</h1>
        <p className="my-4 text-slate-500">Software Engineere Undergraduate</p>
        <div className="mt-4">
          <a
            href="../assets/maximo.brito.resume.pdf"
            download="maximo.brito.pdf"
            className="px-5 py-2 border-solid border-2 border-indigo-600 text-indigo-600 rounded-md m-2"
          >
            Download CV
          </a>
          <button
            onClick={props.toContact}
            className="px-5 py-2 bg-blue-400 rounded-md text-blue-950 m-2"
          >
            Contact Me
          </button>
        </div>
      </header>
      <div className="flex justify-between w-1/2 items-end text-slate-50">
        <ul className="-translate-y-10">
          <li>in</li>
          <li>git</li>
          <li>fb</li>
          <li>|</li>
        </ul>
        <img
          className="w-80 bg-gradient-to-b from-pink-500 to-transparent rounded-t-lg"
          src={homeImage}
          alt=""
        />
        <button
          onClick={props.toContact}
          className="transform rotate-90 -translate-y-16 w-4 h-7"
        >
          Scroll Down
        </button>
      </div>
    </section>
  );
});

Home.displayName = "Home";

export default Home;
