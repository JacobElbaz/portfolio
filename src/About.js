import CV from "./Jacob Elbaz CV.pdf";

function About() {
  return (
    <div className="about" id="about">
      <h1 style={{ color: "black" }}>About me</h1>
      <p>
        I am Jacob, an enthusiastic and driven software engineer with a strong
        aptitude for rapid learning. My insatiable thirst for knowledge drives
        me to continuously explore new technologies and expand my expertise in
        full-stack development. Since a young age, I have nurtured a deep desire
        to transform my innovative ideas into reality, and today, I am
        fulfilling this aspiration through codes and algorithms.
      </p>
      <div className="Buttons">
        <a
          href={CV}
          download="Jacob Elbaz CV.pdf"
          style={{ textDecoration: "none" }}
        >
          <button className="button-30">Download CV</button>
        </a>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <button className="button-30">Contact me</button>
        </a>
      </div>
    </div>
  );
}

export default About;
