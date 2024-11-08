import { forwardRef } from "react";

import photo from "../assets/about-photo.jpg";

const About = forwardRef((props, ref) => {
  const aboutItemStyle =
    "bg-blue-950 text-center text-white p-4 rounded-lg flex-1 hover:bg-transparent  border-2 border-blue-950 hover:border-blue-600 transition-all  duration-500";

  return (
    <div
      id="about"
      ref={ref}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-blue-600 mb-11 font-bold text-lg hidden md:inline-block">
        About Me
      </h1>
      <div
        id="about-continar"
        className="flex items-center justify-center gap-8 flex-col md:flex-row"
      >
        <div className="flex flex-1 justify-center items-center relative px-11">
          <img
            className="w-2/5 rounded-md -rotate-12 hover:rotate-0 transition duration-300 z-20 inset-10"
            src={photo}
            alt="Maximo Brito"
          />
          <div
            className="w-2/5 h-48
           bg-blue-400 rounded-md z-10 absolute"
          ></div>
        </div>
        <div className="flex-1">
          <div className=" flex gap-6 md:w-1/2  p-5">
            <span className={aboutItemStyle}>
              <p>logo</p>
              <h3 className="font-bold text-lg ">Degree</h3>
              <p className="font-extralight">Bsc. Software Engeneering</p>
              <p className="font-extralight">Miami Dade College</p>
            </span>
            <span className={aboutItemStyle}>
              <p>logo</p>
              <h3 className="font-bold text-lg ">GPA</h3>
              <p>3.45</p>
            </span>
            <span className={aboutItemStyle}>
              <p>logo</p>
              <h3 className="font-bold text-lg ">Domains</h3>
              <p>Web Development</p>
            </span>
          </div>
          <p className="flex-1 lg:w-4/5 xl:w-3/5 md:w-full px-5 text-slate-100">
            I'm a <strong>Software Engineering Undergradute</strong> at the
            University of Kelaniya. I'm an enthusiastic and driven Software
            Engineering student seeking a challenging internship opportunity to
            apply and expand my technical skills. With a strong academic
            foundation in software engineering and hands-on experience in
            various programming languages, I am eager to contribute to
            innovative projects and learn from experienced professionals in the
            industry. I am a quick learner who is always ready to face
            challenges.
          </p>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
