import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

import { useRef, useEffect, useState } from "react";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  const refs = [
    { ref: homeRef, id: "home" },
    { ref: aboutRef, id: "about" },
    { ref: toolsRef, id: "tools" },
    { ref: projectsRef, id: "projects" },
    { ref: contactRef, id: "contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.overflowY = "scroll";
    return () => {
      document.body.style.overflow = "unset"; // Reset when component unmounts
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const scrollToHomeRef = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAboutRef = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToToolsRef = () =>
    toolsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProjectsRef = () =>
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContactRef = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="static">
      <Home ref={homeRef} toContact={scrollToContactRef}>
        <SocialMedia orientation={"vertical"} />
      </Home>
      <About ref={aboutRef}></About>
      <Tools ref={toolsRef}></Tools>
      <Projects ref={projectsRef}></Projects>
      <Contact ref={contactRef}></Contact>
      <Footer>
        <SocialMedia orientation={"horizontal"} />
      </Footer>
      <Navigation
        activeSection={activeSection}
        toAbout={scrollToAboutRef}
        toHome={scrollToHomeRef}
        toTools={scrollToToolsRef}
        toProjects={scrollToProjectsRef}
        toContact={scrollToContactRef}
      />
    </div>
  );
}

export default App;
