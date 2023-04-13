import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Portfolio = () => {
  const projects = [
    {
      title: "Extent Web3",
      description: "Frontend Developer Intern",
      imgUrl: projImg1,
    },
    {
      title: "Personal Project",
      description: "Frontend Develoment",
      imgUrl: projImg2,
    },
    {
      title: "The Option Box",
      description: "Software Developer Intern",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Portfolio</h2>
              <p className="py-4">
                Over the past 2.5 years, I have dedicated myself to web
                development and gained valuable experience working on various
                projects that have allowed me to hone my skills. I have
                developed a strong portfolio of projects that demonstrate my
                expertise and showcase my abilities. I am excited to continue
                building upon my knowledge and contributing to the ever-evolving
                world of web development.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
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
