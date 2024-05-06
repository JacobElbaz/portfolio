import "./App.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faLightbulb,
  faCubes,
  faServer,
  faDisplay,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

import typescript from "./typescript-color.svg";
import node from "./node.svg";
import react from "./react.svg";
import cSharp from "./c-sharp.svg";
import dotNet from "./dotnet.svg";
import java from "./java.svg";
import mongoDB from "./mongodb.svg";
import postgreSQL from "./postgresql.svg";
import javascript from "./javascript.svg";
import html from "./html.svg";
import css from "./css.svg";
import bootstrap from "./bootstrap.svg";
import tailwind from "./tailwind.svg";
import linux from "./linux.svg";
import designPatterns from "./design-patterns.svg";
import python from "./python.svg";
import next from "./next-js.svg";
import aws from "./aws.svg";
import azure from "./azure.svg";

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
  };
  window.addEventListener("scroll", reveal);
  return (
    <div className="Skills-container">
      <h1 style={{ marginTop: "50px" }}>Skills</h1>
      <div className="skills">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="skill"
        >
          <h2>
            <FontAwesomeIcon icon={faServer} />
          </h2>
          <h2>BackEnd</h2>
          <br />
          <div className="p-container">
            <p>
              <img src={node} alt="" /> NodeJs
            </p>
            <p>
              <img src={python} alt="" /> Python
            </p>
            <p>
              <img src={cSharp} alt="" /> C#
            </p>
            <p>
              <img src={dotNet} alt="" /> ASP.NET
            </p>
            <p>
              <img src={java} alt="" /> Java
            </p>
            <p>
              <img src={mongoDB} alt="" /> MongoDB
            </p>
            <p>
              <FontAwesomeIcon icon={faDatabase} /> SQL
            </p>
            <p>
              <img src={postgreSQL} alt="" /> PostgreSQL
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="skill"
        >
          <h2>
            <FontAwesomeIcon icon={faDisplay} />
          </h2>
          <h2>FrontEnd</h2>
          <br />
          <div className="p-container">
            <p>
              <img src={javascript} alt="" /> JavaScript
            </p>
            <p>
              <img src={typescript} alt="" /> TypeScript
            </p>
            <p>
              <img src={react} alt="" /> React
            </p>
            <p>
              <img src={next} alt="" /> Next
            </p>
            <p>
              <img src={html} alt="" /> HTML5
            </p>
            <p>
              <img src={css} alt="" /> CSS3
            </p>
            <p>
              <img src={bootstrap} alt="" /> Bootstrap
            </p>
            <p>
              <img src={tailwind} alt="" /> Tailwind
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="skill"
        >
          <h2>
            <FontAwesomeIcon icon={faEllipsis} />
          </h2>
          <h2>More</h2>
          <br />
          <div className="p-container">
            <p>
              <img src={linux} alt="" /> Linux
            </p>
            <p>
              <FontAwesomeIcon icon={faLightbulb} /> Algorithms
            </p>
            <p>
              <FontAwesomeIcon icon={faCubes} /> Data Structures
            </p>
            <p>
              <img src={designPatterns} alt="" /> Design Patterns
            </p>
            <p>
              <img src={aws} alt="" /> AWS
            </p>
            <p>
              <img src={azure} alt="" /> Azure
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
