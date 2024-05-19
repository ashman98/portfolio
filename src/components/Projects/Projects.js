import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogAboutDog from "../../Assets/Projects/blogAboutDog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>cd ..
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogAboutDog}
              isBlog={false}
              title="Blog About Street Dogs"
              description="Blog about the life of street dogs build with NodeJS / Embedded JavaScript templates, and MongoDB. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ashman98/NodeJsBlog"
              demoLink="https://nodejsblog-production-e6d4.up.railway.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
