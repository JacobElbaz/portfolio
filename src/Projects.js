import { Button } from "react-bootstrap";
import komin from "./Komin.png";
import shop from "./gamezone.png";
import event from "./wedding.png";
import solvia from "./solvia-energie.png";
import spoilMe from "./spoilme.png";
import pokemon from "./pokemon-rankers.png";
import Chip from "./Chip";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <h1 className="mb-5">My projects</h1>
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="project"
        >
          <img src={solvia} alt="" />
          <div className="project-info">
            <h2>Company Website</h2>
            <div style={{ textAlign: "left", fontSize: "small" }}>
              <p>
                A comprehensive website provides detailed company information
                and services, along with a user-friendly form to generate leads.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Chip label="React" />
              <Chip label="MaterialUI" />
              <Chip label="SEO" />
              <Chip label="Framer Motion" />
            </div>
          </div>
          <div className="project-actions">
            <Button
              href="https://github.com/JacobElbaz/solviaenergie"
              target="_blank"
              variant="outline-light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="logo-github"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Code
              </div>
            </Button>
            <Button
              href="https://solviaenergie.netlify.app/"
              target="_blank"
              variant="light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="open-outline"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Live Demo
              </div>
            </Button>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="project">
          <img
            src={pokemon}
            alt="pokemon-rankers-img"
            style={{ objectFit: "contain" }}
          />
          <div className="project-info">
            <h2>Pokemon Rankers</h2>
            <div style={{ textAlign: "left", fontSize: "small" }}>
              <p>
                A platform where users can vote for their favorite Pokémon and
                view metrics and rankings based on Pokémon generation or type.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Chip label="React" />
              <Chip label="Node.js" />
              <Chip label="Express.js" />
              <Chip label="MongoDB" />
            </div>
          </div>
          <div className="project-actions">
            <Button
              href="https://github.com/JacobElbaz/pokemon-rankers"
              target="_blank"
              variant="outline-light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="logo-github"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Code
              </div>
            </Button>
            <Button
              href="https://pokemon-rankers.vercel.app/"
              target="_blank"
              variant="light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="open-outline"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Live Demo
              </div>
            </Button>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="project">
          <img src={shop} alt="shop-img" />
          <div className="project-info">
            <h2>Game Zone</h2>
            <div style={{ textAlign: "left", fontSize: "small" }}>
              <p>
                GameZone is an online video game shop equipped with essential
                features. Clients can log in, place orders, add items to their
                wishlist, and more. Managers have access to functionalities such
                as order and product management.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Chip label="React" />
              <Chip label="Redux" />
              <Chip label="Node.js" />
              <Chip label="Express.js" />
              <Chip label="MongoDB" />
            </div>
          </div>
          <div className="project-actions">
            <Button
              href="https://github.com/JacobElbaz/e-Shop"
              target="_blank"
              variant="outline-light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="logo-github"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Code
              </div>
            </Button>
            <Button
              href="https://game-zone-eshop.netlify.app/"
              target="_blank"
              variant="light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="open-outline"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Live Demo
              </div>
            </Button>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="project">
          <img src={event} alt="event-img" />
          <div className="project-info">
            <h2>Event App</h2>
            <div style={{ textAlign: "left", fontSize: "small" }}>
              <p>
                The Event App acts as a digital invitation card, featuring event
                details and allowing guests to RSVP. Managers can access the
                guest list and responses.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Chip label="React" />
              <Chip label="Node.js" />
              <Chip label="Express.js" />
              <Chip label="MongoDB" />
            </div>
          </div>
          <div className="project-actions">
            <Button
              href="https://github.com/JacobElbaz/event-website"
              target="_blank"
              variant="outline-light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="logo-github"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Code
              </div>
            </Button>
            <Button
              href="https://event-react-frontend.netlify.app/"
              target="_blank"
              variant="light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="open-outline"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Live Demo
              </div>
            </Button>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="project">
          <img
            src={spoilMe}
            alt="ai-project-img"
            style={{ objectFit: "contain" }}
          />
          <div className="project-info">
            <h2>SpoilMe</h2>
            <div style={{ textAlign: "left", fontSize: "small" }}>
              <p>
                A model fine-tuned from GPT-3 capable of predicting movie
                spoilers based on plot summaries.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Chip label="React" />
              <Chip label="OpenAI API" />
              <Chip label="GPT-3" />
              <Chip label="Fine Tuning" />
              <Chip label="Octoparse" />
            </div>
          </div>
          <div className="project-actions">
            <Button
              href="https://github.com/JacobElbaz/spoilme"
              target="_blank"
              variant="outline-light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="logo-github"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Code
              </div>
            </Button>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="project">
          <img src={komin} alt="komin-img" />
          <div className="project-info">
            <h2>Komin</h2>
            <div style={{ textAlign: "left", fontSize: "small" }}>
              <p>
                A mobile social networking app that includes post management and
                chat features.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Chip label="TypeScript" />
              <Chip label="React Native" />
              <Chip label="Node.js" />
              <Chip label="Jest" />
              <Chip label="MongoDB" />
              <Chip label="Socket.io" />
            </div>
          </div>
          <div className="project-actions">
            <Button
              href="https://github.com/JacobElbaz/komin"
              target="_blank"
              variant="outline-light"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ion-icon
                  name="logo-github"
                  style={{ fontSize: "22px" }}
                ></ion-icon>
                Code
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="Buttons">
        <a
          href="https://github.com/JacobElbaz/"
          target="_blank"
          className="text-decoration-none"
        >
          <button className="btn-grad">To my Github</button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
