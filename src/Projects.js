import { Button, Col, Container, Row } from "react-bootstrap";
import fastopen from "./FastOpen.png";
import covid from "./covid.jpg";
import shop from "./shop.jpg";
import event from "./event.png";

function Projects() {
    return (
        <div className="Projects" id="projects">
            <Container className="Projects">
                <h1 className="mb-5">My projects</h1>
                <Row>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Chrome Extension</h2>
                                <h5>ReactJS</h5>
                            </div>
                            <img src={fastopen} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/react-extension" target="_blank" variant="outline-light">Repository</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Video Games Store</h2>
                                <h5>MERN Stack</h5>
                            </div>
                            <img src={shop} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/e-Shop" target="_blank" variant="outline-light">Repository</Button>
                                <Button href="" variant="outline-light">Website</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Event Website</h2>
                                <h5>MERN Stack</h5>
                            </div>
                            <img src={event} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/event-website" target="_blank" variant="outline-light">Repository</Button>
                                <Button href="https://event-react-frontend.netlify.app/" target="_blank" variant="outline-light">Website</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>COVID Prediction</h2>
                                <h5>Java / OOP / Design Patterns</h5>
                            </div>
                            <img src={covid} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/Covid-Pandemic-Simulation" target="_blank" variant="outline-light">Repository</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="Buttons">
                    <a href="https://github.com/JacobElbaz/" target="_blank" className="text-decoration-none"><button className="btn-grad">To my Github</button></a>
                </div>
            </Container>
        </div>
    )
}

export default Projects;