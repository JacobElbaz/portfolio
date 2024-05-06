import profil from "./profilepic.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about" id="about">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          color: "white",
          borderRadius: "1rem",
          minHeight: "400px",
          width: "100%",
          marginBlock: "2rem",
          gap: "3rem",
          justifyContent: "center",
        }}
      >
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileHover={{
            scale: 1.1,
            borderRadius: "69% 31% 30% 70% / 56% 62% 38% 44% ",
          }}
          whileInView={{ opacity: 1, x: 0 }}
          src={profil}
          alt="profilpic"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
            maxHeight: "300px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          style={{ textAlign: "left", maxWidth: "1000px" }}
        >
          <h1 style={{ color: "white", fontWeight: "600" }}> Hey there 👋</h1>
          <p>
            I'm <strong>Jacob Elbaz</strong>, a{" "}
            <strong>software engineer</strong> with roots in both{" "}
            <strong>Israel</strong> and <strong>France</strong>. My whole gig is
            about taking cool <strong>ideas</strong> and making them real.
          </p>
          <p>
            I graduated from <strong>Sami Shamoon College</strong> in{" "}
            <strong>Israel</strong> in <strong>2023</strong> with a{" "}
            <strong>Bachelor of Science</strong> in{" "}
            <strong>Software Engineering</strong>, pulling off a decent{" "}
            <strong>GPA</strong> of <strong>86.6</strong>.{" "}
          </p>{" "}
          <p>
            {" "}
            For the last <strong>three years</strong>, I've been doing my own
            thing as a self-employed <strong>Fullstack developer</strong> at{" "}
            <strong>UNIQ Web</strong>. I whip up custom{" "}
            <strong>web solutions</strong>, from simple pages to fancy-pants{" "}
            <strong>SaaS apps</strong>.
          </p>
          <p>
            When I'm not knee-deep in code, you can find me diving into{" "}
            <strong>video games</strong>, or just geeking out over whatever's
            new and shiny in the world of <strong>technology</strong>.
          </p>
          <hr />
          <div className="grid">
            <div>
              <div style={{ display: "flex", gap: "5px" }}>
                <ion-icon name="person-outline"></ion-icon>
                <h6>NAME</h6>
              </div>
              <p style={{ opacity: ".6" }}>Jacob ELBAZ</p>
            </div>
            <div>
              <div style={{ display: "flex", gap: "5px" }}>
                <ion-icon name="location-outline"></ion-icon>
                <h6>LOCATION</h6>
              </div>
              <p style={{ opacity: ".6" }}>Ashdod, ISRAEL</p>
            </div>
            <div>
              <div style={{ display: "flex", gap: "5px" }}>
                <ion-icon name="mail-outline"></ion-icon>
                <h6>EMAIL</h6>
              </div>
              <p style={{ opacity: ".6" }}>jacobelbz@gmail.com</p>
            </div>
            <div>
              <div style={{ display: "flex", gap: "5px" }}>
                <ion-icon name="briefcase-outline"></ion-icon>
                <h6>EMPLOYMENT</h6>
              </div>
              <p style={{ opacity: ".6" }}>Self-employed @ Uniq Web</p>
            </div>
          </div>
        </motion.div>
      </div>
      {/*
      <div className="flex">
        <div className="blur-card">
          <h2>Bio</h2>
          <div className="flex" style={{ gap: "0 50px", marginTop: 0 }}>
            <div>
              <h3>Name</h3>
              <p>Jacob Elbaz</p>
              <h3>Age</h3>
              <p>28</p>
              <h3>Languages</h3>
              <p>
                English <br /> French <br /> Hebrew
              </p>
            </div>
            <div>
              <h3>Nationality</h3>
              <p>Israeli & French</p>
              <h3>Goal</h3>
              <p>Transform ideas into reality</p>
              <h3>Interest</h3>
              <p>
                Video Games <br /> Automobile <br /> Technologies
              </p>
            </div>
            <div>
              <h3>Description</h3>
              <p>
                Enthusiastic and driven software engineer with a strong aptitude
                for rapid learning.
              </p>
            </div>
          </div>
        </div>
        <div className="blur-card">
          <h2>Education</h2>
          <h3>Degree</h3>
          <p>Bachelor of Science</p>
          <h3>Major</h3>
          <p>Software Engineering</p>
          <h3>College</h3>
          <p>Sami Shamoon College, ISRAEL</p>
          <h3>Graduation Year</h3>
          <p>2023</p>
          <h3>GPA</h3>
          <p>86.6</p>
        </div>
        <div className="blur-card">
          <h2>Experience</h2>
          <h3>Company</h3>
          <a
            href="https://uniq-iota.vercel.app/"
            title="Link to UNIQ website"
            className="a-to-p"
            target="blank"
          >
            UNIQ Web
          </a>
          <h3>Role</h3>
          <p>Founder & Full-Stack developer</p>
          <h3>Description</h3>
          <p>
            I provide tailored web solutions, offering services that span from
            basic landing pages to intricate SaaS applications.
          </p>
          <h3>Experience</h3>
          <p>3 Years</p>
        </div>
      </div>
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
      </div>*/}
    </div>
  );
}

export default About;
