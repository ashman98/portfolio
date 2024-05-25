import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogAboutDog from "../../Assets/Projects/blogAboutDog.png";
import testApiCall from  "../../Assets/Projects/testApiCall.png";

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
              description="Blog about the life of street dogs build with NodeJS / Embedded JavaScript templates, and MongoDB.As well as supports reactions on messages."
              ghLink="https://github.com/ashman98/NodeJsBlog"
              demoLink="https://nodejsblog-production-e6d4.up.railway.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={testApiCall}
                isBlog={false}
                title="Integration System for API Calls Testing."
                description="Test program for calling the API to Data Sfera, testing API endpoints, and saving results in MySQL. Built with Laravel and MySQL."
                ghLink="https://github.com/ashman98/dataSferaApiTest"
                demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
