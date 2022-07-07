import { Col, Container, Row } from "react-bootstrap";
import fastopen from "./FastOpen.png";
import covid from "./covid.jpg";
import shop from "./shop.jpg"

function Projects() {
    return(
        <div className="Projects">
        <Container className="Projects">
            <h1>My projects</h1>
            <Row>
            <Col>
            <div className="project">
                <a href="" className="text-decoration-none">
                <h2>React - Chrome extension</h2>
                <img src={fastopen} alt="" className="img_project"/> 
                </a>
            </div>
            </Col>
            <Col>
            <a href="" className="text-decoration-none">
            <div className="project">
                <h2>MERN Stack - eShop</h2>
                <img src={shop} alt="" className="img_project"/>
            </div>
            </a>
            </Col>
            <Col>
            <a href="" className="text-decoration-none">
            <div className="project">
                <h2>Java - COVID Prediction</h2>
                <img src={covid} alt="" className="img_project"/>
            </div>
            </a>
            </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Projects;