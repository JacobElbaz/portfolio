import { Button, Col, Container, Row } from "react-bootstrap";
import komin from "./Komin.png";
import shop from "./shop.jpg";
import event from "./event.png";
import solvia from "./solvia.png";
import spoilMe from "./spoilme.png";
import pokemon from "./pokemon-rankers.png";
import Chip from "./Chip";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <Container className="Projects">
        <h1 className="mb-5">My projects</h1>
        <Row>
          <Col>
            <div className="project">
              <img src={solvia} alt="" />
              <div className="project-info">
                <h2>Landing Page</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip label="React" />
                  <Chip label="MaterialUI" />
                  <Chip label="SEO" />
                  <Chip label="Framer Motion" />
                </div>
              </div>
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/solviaenergie"
                  target="_blank"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href="https://solviaenergie.netlify.app/"
                  target="_blank"
                  variant="light"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <img src={shop} alt="shop-img" />
              <div className="project-info">
                <h2>Video Games Store</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip label="React" />
                  <Chip label="Redux" />
                  <Chip label="Node.js" />
                  <Chip label="Express.js" />
                  <Chip label="MongoDB" />
                </div>
              </div>
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/e-Shop"
                  target="_blank"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href="https://game-zone-eshop.netlify.app/"
                  target="_blank"
                  variant="light"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <img src={event} alt="event-img" />
              <div className="project-info">
                <h2>Event Website</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip label="React" />
                  <Chip label="Node.js" />
                  <Chip label="Express.js" />
                  <Chip label="MongoDB" />
                </div>
              </div>
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/event-website"
                  target="_blank"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href="https://event-react-frontend.netlify.app/"
                  target="_blank"
                  variant="light"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <img
                src={spoilMe}
                alt="ai-project-img"
                style={{ objectFit: "contain" }}
              />
              <div className="project-info">
                <h2>AI Project</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip label="React" />
                  <Chip label="OpenAI" />
                  <Chip label="Fine Tuning" />
                  <Chip label="AI" />
                </div>
              </div>
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/spoilme"
                  target="_blank"
                  variant="outline-light"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <img
                src={pokemon}
                alt="pokemon-rankers-img"
                style={{ objectFit: "contain" }}
              />
              <div className="project-info">
                <h2>Pokemon Ranking</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip label="React" />
                  <Chip label="Node.js" />
                  <Chip label="Express.js" />
                  <Chip label="MongoDB" />
                </div>
              </div>

              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/pokemon-rankers"
                  target="_blank"
                  variant="outline-light"
                >
                  GitHub
                </Button>
                <Button
                  href="https://pokemon-rankers.vercel.app/"
                  target="_blank"
                  variant="light"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <img src={komin} alt="komin-img" />
              <div className="project-info">
                <h2>Social Network</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Chip label="TypeScript" />
                  <Chip label="React Native" />
                  <Chip label="Node.js" />
                  <Chip label="Express.js" />
                  <Chip label="MongoDB" />
                  <Chip label="Socket.io" />
                </div>
              </div>
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/komin"
                  target="_blank"
                  variant="outline-light"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="Buttons">
          <a
            href="https://github.com/JacobElbaz/"
            target="_blank"
            className="text-decoration-none"
          >
            <button className="btn-grad">To my Github</button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
