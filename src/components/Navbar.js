import classes from "./Navbar.module.css";
import ids from "./Navbar.module.css";
import { useState } from "react";
import more from "../Images/loadmore.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className={classes.navbar}>
      <div className={classes.leftside}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Meet Goswami
        </Link>
      </div>
      <div className={classes.rightside}>
        <motion.div
          className={classes.carousal}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 3 }}
        >
          <div className={classes.links} id={showLinks ? ids.hidden : ""}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Projects
            </Link>
            <a>Resume</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            <img src={more} alt="load more" className={classes.image} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
