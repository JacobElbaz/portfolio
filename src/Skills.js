import { Col, Container, Row } from "react-bootstrap";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faLightbulb, faCubes, faSolarPanel, faServer, faDisplay, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faPython, faJava, faNodeJs, faJs, faReact, faHtml5, faCss3, faBootstrap, faLinux } from '@fortawesome/free-brands-svg-icons'


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
        <div className="Skills">
            <Container className="Skills" id="skills">
                <h1>Skills</h1>
                <div className="Skills" >
                    <Row>
                        <Col className="skill reveal">
                            <h2><FontAwesomeIcon icon={faServer} /></h2>
                            <h2>BackEnd</h2><br />
                            <p><FontAwesomeIcon icon={faPython}></FontAwesomeIcon> Python</p>
                            <p><FontAwesomeIcon icon={faJava} /> Java</p>
                            <p><FontAwesomeIcon icon={faNodeJs} /> NodeJs</p>
                            <p><FontAwesomeIcon icon={faDatabase} /> MongoDB</p>
                        </Col>
                        <Col className="skill reveal">
                            <h2><FontAwesomeIcon icon={faDisplay} /></h2>
                            <h2>FrontEnd</h2><br />
                            <p><FontAwesomeIcon icon={faJs} /> JavaScript</p>
                            <p><FontAwesomeIcon icon={faReact} /> React</p>
                            <p><FontAwesomeIcon icon={faHtml5} /> HTML5</p>
                            <p><FontAwesomeIcon icon={faCss3} /> CSS3</p>
                            <p><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</p>
                        </Col>
                        <Col className="skill reveal">
                            <h2><FontAwesomeIcon icon={faEllipsis} /></h2>
                            <h2>More</h2><br />
                            <p><FontAwesomeIcon icon={faLinux} /> Linux</p>
                            <p><FontAwesomeIcon icon={faLightbulb} /> Algorithms</p>
                            <p><FontAwesomeIcon icon={faCubes} /> Data Structures</p>
                            <p><FontAwesomeIcon icon={faSolarPanel} /> Design Patterns</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Skills;