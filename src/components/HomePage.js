import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:2}}
      exit={{ opacity: 0 }}
    >
      <div className={classes.main}>
        <div className={classes.notmain}>
          <h1>Meet Goswami</h1>
        </div>
        <div className={classes.explore}>
          <h3>Web Developer / Student </h3>
          <h3 className={classes.sorry}>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Explore
            </Link>
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
