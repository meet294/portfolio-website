import classes from "./ProjectsPage.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import random from "../Images/random.png";
import knowyourdrink from "../Images/knowyourdrink.png";
import nytimes from "../Images/nytimes.png";
import expensetracker from "../Images/expensetracker.png";

function ProjectsPage() {
  const ProjectList = [
    {
      image: random,
      title: "Random Advice Generator",
      About: "Will give you useless random advice.",
      index: 1,
    },
    {
      image: knowyourdrink,
      title: "Know your Drink",
      About: "Search the recipe of your favourite drink.",
      index: 2,
    },
    {
      image: nytimes,
      title: "BookStop",
      About: "Shows NY Times current bestSellers.",
      index: 3,
    },
    {
      image: expensetracker,
      title: "ExpenseTracker",
      About: "Keep track of your expenses.",
      index: 4,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, duration: 10 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className={classes.container}>
        <h1>Projects</h1>

        <motion.div
          className={classes.carousal}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 3 }}
        >
          {ProjectList.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              About={item.About}
              key={item.index}
            ></Card>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;
