import { Col, Container, Row } from "react-bootstrap";
import './App.css';

function Skills() {
    return(
        <Container id="skills">
            <h1>Skills</h1>
            <div className="Skills" >
                <Row>
                <Col className="skill">
                    <h2>Back</h2>
                    <p>Python</p>
                    <p>Java</p>
                    <p>NodeJs</p>
                </Col>
                <Col className="skill">
                    <h2>Front</h2>
                    <p>JavaScript</p>
                    <p>React</p>
                </Col>
                <Col className="skill">
                    <h2>Design</h2>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>Bootstrap</p>
                </Col>
                <Col className="skill">
                    <h2>Databases</h2>
                    <p>MongoDB</p>
                    <p>SQL</p>
                    <p>PostgreSQL</p>
                </Col>
                <Col className="skill">
                    <h2>More</h2>
                    <p>Linux</p>
                    <p>Algorithms</p>
                    <p>Data Structures</p>
                </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Skills;