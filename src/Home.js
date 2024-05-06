import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bottomBg from "./hero-bottom.png";
import fullBg from "./hero.jpg";

function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  return (
    <div id="home" ref={ref}>
      <motion.div style={{ zIndex: 10, position: "relative", y: textY }}>
        <p style={{ margin: "0", color: "black", fontWeight: "bold" }}>
          Hi, I'm
        </p>
        <h1
          style={{ fontSize: "70px", color: "black" }}
          className="tracking-in-contract-bck-bottom"
        >
          Jacob Elbaz
        </h1>
        <h2 style={{ color: "black" }}>Software Engineer</h2>
        <h2 style={{ color: "black" }}>FullStack Developer</h2>
      </motion.div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundPosition: "bottom",
          backgroundImage: `url(${fullBg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          backgroundPosition: "bottom",
          backgroundImage: `url(${bottomBg})`,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}

export default Home;
