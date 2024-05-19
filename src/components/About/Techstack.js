import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql,SiExpress  } from "react-icons/si";

import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
    DiPhp,
    DiMysql
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

import { MdJavascript,MdHttp } from "react-icons/md";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">

          <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <MdHttp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiExpress  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApollographql />
      </Col>
    </Row>
  );
}

export default Techstack;
