import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">Ashot </span>
            from <span className="purple"> Hrazdan, Armenia.</span>
            <br />
            I am currently working as a web developer at Masys.
            <br />
            I have about 2 years of work experience.I also constantly work on myself on my own and take part in various events and seminars
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(126,172,158)" }}>
            Strives to be unique and different in his work !"{" "}
          </p>
          <footer className="blockquote-footer">Ashot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
