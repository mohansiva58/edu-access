
import { motion } from 'framer-motion';
import './HeroSection.css';
import React, { useState } from "react";

function HeroSection() {
  const [showText, setShowText] = useState(false); // State to manage text visibility
  return (
    <div className="App">
      <motion.header
        className="App-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Quality Education
        </motion.h1>
        <h2>For Everyone, Everywhere</h2>
        <p>
          Empowering underserved communities through accessible education, mentorship,
          and personalized learning paths.
        </p>
        <div className="buttons">
      <motion.button
        className="btn-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        
      >
        Get Started
      </motion.button>

      <motion.button
        className="btn-secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowText((prev) => !prev)} // Toggle text visibility
      >
        Learn More
      </motion.button>

      {/* Conditionally render text based on showText state */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "20px", fontSize: "1rem", color: "#ffffff" }}
        >
         In the digital age, the promise of technology to democratize education has not been fully realized, leading to significant disparities in access to quality educational resources. While the internet and digital tools have the potential to enhance learning experiences and provide vast amounts of information, a substantial portion of the global population still faces barriers that prevent them from benefiting from these advancements.!
        </motion.div>
      )}
    </div>
      </motion.header>
    </div>
  );
}

export default HeroSection;