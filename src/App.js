import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import sample from "./Images/3157002721.mp4";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
// import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 10 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <video loop autoPlay muted id="video">
          <source src={sample} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <Router>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
