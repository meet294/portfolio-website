import classes from "./ProjectsPage.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import random from "../Images/random.png";
import knowyourdrink from "../Images/knowyourdrink.png";
import nytimes from "../Images/nytimes.png";


function ProjectsPage() {
  const ProjectList = [
    {
      image: random,
      title: "Random Advice Generator",
      About: "Will give you useless random advice.",
      glink: "https://github.com/meet294/RandomAdviceGenerator",
      index: 1,
    },
    {
      image: knowyourdrink,
      title: "Know your Drink",
      About: "Search the recipe of your favourite drink.",
      glink: "https://github.com/meet294/Know-Your-Drink",
      index: 2,
    },
    {
      image: nytimes,
      title: "BookStop",
      About: "Shows NY Times current bestSellers.",
      glink: "https://github.com/meet294/Book-Stop",
      index: 3,
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
              glink={item.glink}
              key={item.index}
            ></Card>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;
