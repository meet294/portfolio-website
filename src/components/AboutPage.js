import classes from "./AboutPage.module.css";
import me from "../Images/me2.jpg";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, duration: 10 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={classes.about}>
        <div className={classes.all}>
          <div className={classes.head}>
            <h1>About Me</h1>
            <img src={me} alt="me" className={classes.image} />
          </div>

          <div className={classes.text}>
            <h5>Hey there, I am an aspiring web developer!</h5>
            <h5>
              I love making websites which are fun, I mainly work with ReactJS,
              Django, Bootstrap, Python, Html, CSS, Javascript. I am currently
              pursuing my bachelor's degree in Computer Science at Indus
              University, would love to help you.
            </h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
