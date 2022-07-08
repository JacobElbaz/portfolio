import { Container } from "react-bootstrap";
import CV from "./Jacob Elbaz CV.pdf";

function About() {
    return (
        <Container>
            <div className="About" id="about">
                <h1>About me</h1>
                <p>
                    I'm Jacob, a motived and passionate student who learns quickly. <br />
                    I always desire to expand my knowledge and my skills with new technologies. <br />
                    After high school graduation I was enrolled in the army as paratrooper warrior. <br />
                    After that I study at the BGU preparatory for Engineering and finaly started learning Software Engineering at SCE. <br />
                    From a very young age, my dream was to invent, to create, to concretize my ideas. <br />
                    Today I realize this dream through codes and algorithms.
                </p>
            </div>
            <div className="Buttons">
                <a href={CV} download="Jacob Elbaz CV.pdf" style={{textDecoration: "none"}}><button className="btn-grad" >Download CV</button></a>
                <a href="#contact" style={{textDecoration: "none"}}><button className="btn-grad">Contact me</button></a>
            </div>
        </Container>
    )
}

export default About;