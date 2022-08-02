import classes from "./Footer.module.css";
import mark from "../Images/GitHub-Mark.png";
import lin from "../Images/LI-In-Bug.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const movieAnimations = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    tap: { scale: 0.9 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={classes.footer}
      variants={movieAnimations}
      ref={ref}
      initial="hidden"
      animate={controls}
      whileTap="tap"
      transition={{
        duration: 2,
      }}
    >
      <div className={classes.heading}>
        <h1>Contact me:</h1>
      </div>
      <div className={classes.links}>
        <motion.a
          href="https://github.com/meet294"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mark} alt="github"></img>
        </motion.a>
        <motion.a href="" target="_blank" rel="noopener noreferrer">
          <img src={lin} alt="linkedin"></img>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Footer;
