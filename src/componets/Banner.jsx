import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { BiChevronRightCircle } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Flutter Developer", "DSA Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Himanshu`}{" "}
                <div
                  className="txt-rotate"
                  data-rotate='[ "Web Developer", "Flutter Developer", "DSA Enthusiast" ]'
                >
                  <span className="wrap">A {text}</span>
                </div>
              </h1>
              <p className="py-3">
                My name is Himanshu Kumar Verma and I am an IT student at IIIT
                Vadodara. I specialize in MERN stack web development and Flutter
                development. I am passionate about learning new technologies and
                am actively seeking opportunities to grow as a software
                developer. With a strong foundation in my field and a drive to
                continuously improve, I am a valuable asset to any team.
              </p>
              <HashLink
                smooth
                to="#connect"
                className="text-decoration-none"
              >
                <button>
                  Let's Connect <BiChevronRightCircle size={21} />
                </button>
              </HashLink>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <motion.img
                src={headerImg}
                className="p-5 m-3"
                alt="Header Img"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.5}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
