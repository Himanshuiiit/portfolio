import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Extent Web3",
      description: "Frontend Developer Intern",
      imgUrl: projImg1,
      link: "https://www.dextent.xyz/",
    },
    {
      title: "Personal Project",
      description: "Frontend Develoment",
      imgUrl: projImg2,
      link: "https://crypto-tracker-nu-five.vercel.app/",
    },
    {
      title: "The Option Box",
      description: "Software Developer Intern",
      imgUrl: projImg3,
      link: "https://theoptionbox.com/",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const cardAnimation = useAnimation();
  const textAnimation = useAnimation();
  const headerAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        rotateX: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "keyframes",
          duration: 0.5,
        },
      });
      textAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "keyframes",
          duration: 0.7,
        },
      });
      cardAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "keyframes",
          duration: 0.7,
          delay: 0.1,
        },
      });
    }else {
      headerAnimation.start({
        rotateX: -90,
        y: 30,
        opacity: 0,
        transition: {
          type: "keyframes",
          duration: 0.5,
        },
      });
      textAnimation.start({
        y: 100,
        opacity: 0,
        transition: {
          type: "keyframes",
          duration: 0.7,
        },
      });
      cardAnimation.start({
        y: 100,
        opacity: 0,
        transition: {
          type: "keyframes",
          duration: 0.2,
        },
      });
    }
  }, [inView]);
  return (
    <section className="project" id="project" ref={ref}>
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <motion.h2 animate={headerAnimation}>Portfolio</motion.h2>
              <motion.p className="py-4" animate={textAnimation}>
                Over the past 2.5 years, I have dedicated myself to web
                development and gained valuable experience working on various
                projects that have allowed me to hone my skills. I have
                developed a strong portfolio of projects that demonstrate my
                expertise and showcase my abilities. I am excited to continue
                building upon my knowledge and contributing to the ever-evolving
                world of development.
              </motion.p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <motion.div animate={cardAnimation}>
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </motion.div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
