import { Col, Container, Row } from "react-bootstrap";
import './App.css';

function Skills() {
    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    return (
        <Container id="skills">
            <h1 style={{color:"black"}}>Skills</h1>
            <div className="Skills" >
                <Row>
                    <Col className="skill reveal">
                        <h2>Back</h2>
                        <p>Python</p>
                        <p>Java</p>
                        <p>NodeJs</p>
                    </Col>
                    <Col className="skill reveal">
                        <h2>Front</h2>
                        <p>JavaScript</p>
                        <p>React</p>
                    </Col>
                    <Col className="skill reveal">
                        <h2>Design</h2>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Bootstrap</p>
                    </Col>
                    <Col className="skill reveal">
                        <h2>Databases</h2>
                        <p>MongoDB</p>
                        <p>SQL</p>
                        <p>PostgreSQL</p>
                    </Col>
                    <Col className="skill reveal">
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