import "./App.css";
import NavBar from "./componets/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./componets/Banner";
import { Skills } from "./componets/Skills";
import { Portfolio } from "./componets/Portfolio";
import { Contact } from "./componets/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

function App() {
  const curserRef = useRef();
  const divRef = useRef();
  const { scrollYProgress } = useScroll({ target: divRef });
  console.log(scrollYProgress);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      curserRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);

  return (
    <>
      <div className="App" ref={divRef}>
        <NavBar />
        <Banner />
        <Skills />
        <Portfolio />
        <Contact />
        <ToastContainer />
      </div>
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor"
        ref={curserRef}
      >
        <circle
          cx="45"
          cy="45"
          r="42.5"
          stroke="#E2E2E2"
          stroke-width="4"
          opacity={0.1}
        />
        <motion.circle
          cx="45"
          cy="45"
          r="42.5"
          stroke="url(#paint0_linear_102_3)"
          stroke-width="10"
          style={{ pathLength: scrollYProgress }}
        />

        <defs>
          <linearGradient
            id="paint0_linear_102_3"
            x1="82"
            y1="-4.29153e-06"
            x2="10"
            y2="77.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2830F5" />
            <stop offset="1" stop-color="#AD07FB" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default App;
