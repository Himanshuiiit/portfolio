import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DiReact, DiJava } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFlutter,
  SiAngular,
} from "react-icons/si";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have expertise in React.js, JavaScript, TypeScript, Tailwind
                CSS, Node.js, Express.js, and MongoDB
                <br /> I am currently learning Flutter and Angular to expand my
                skill set
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/*m1 = 95% m2 = 80% m3 = 90%*/}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    <DiReact className="mx-1 mb-1" />
                    React js
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    <SiJavascript size={14} className="mx-2 mb-1" />
                    JavaScript
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    <SiTypescript size={14} className="mx-2 mb-1" />
                    TypeScript
                  </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>
                    <SiTailwindcss size={16} className="mx-2 mb-1" />
                    Tailwind CSS
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    <SiNodedotjs size={16} className="mx-1 mb-1" />
                    Node js
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    <SiExpress size={20} className="mx-2 mb-1" />
                    Express js
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    <SiMongodb size={18} className="mx-1 mb-1" />
                    MongoDB
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    <DiJava size={24} className="mx-1 mb-2" />
                    Java
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    <SiFlutter size={14} className="mx-1 mb-1" />
                    Flutter
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    <SiAngular size={14} className="mx-2 mb-1" />
                    Angular
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
