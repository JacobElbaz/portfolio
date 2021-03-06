import { Container } from "react-bootstrap";
import CV from "./Jacob Elbaz CV.pdf";

function About() {
    return (
        <Container>
            <div className="About" id="about">
                <h1>About me</h1>
                <p>
                    I'm Jacob, a motivated and passionate student who learns quickly. <br />
                    I have always desired to expand my knowledge and skills with new technologies. <br />
                    After high school graduation, I was enrolled in the army as a paratrooper warrior. <br />
                    After that, I studied at the <a href="https://in.bgu.ac.il/Pages/default.aspx" target="_blank" className="text-decoration-none text-secondary">BGU</a> preparatory for Engineering and started learning Software Engineering at <a href="https://www.sce.ac.il/" target="_blank" className="text-decoration-none text-secondary">SCE</a>. <br />
                    From a very young age, my dream was to invent, create, to concretize my ideas. <br />
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