import CV from "./Jacob Elbaz CV.pdf";

function About() {
    return (
        <div className="about" id="about">
            <h1 style={{ color: "black" }}>About me</h1>
            <p>
                I'm Jacob, a motivated and passionate student who learns quickly. <br />
                I have always desired to expand my knowledge and skills with new technologies. <br />
                Today I'm a Software Engineering Student at <a href="https://www.sce.ac.il/" target="_blank" className="text-decoration-none links">SCE</a>. <br />
                From a very young age, my dream was to invent, create, to concretize my ideas. <br />
                Today I realize this dream through codes and algorithms.
            </p>
            <div className="Buttons">
                <a href={CV} download="Jacob Elbaz CV.pdf" style={{ textDecoration: "none" }}><button className="btn-grad" >Download CV</button></a>
                <a href="#contact" style={{ textDecoration: "none" }}><button className="btn-grad">Contact me</button></a>
            </div>
        </div>
    )
}

export default About;