import React from "react";
import { motion } from "framer-motion"; // Install framer-motion for animations
import { FiUser } from "react-icons/fi"; // Import the User icon
import pfp from "../assets/pfp.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mx-4 lg:mx-16"> {/* Center the sections */}
        {/* Left Section - Image */}
        <motion.div
          className="flex justify-center lg:justify-start w-full lg:w-1/3 ml-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={pfp}
            alt="Profile"
            className="rounded-full shadow-xl w-64 h-64 lg:w-80 lg:h-80"
          />
        </motion.div>

        {/* Right Section - Data */}
        <motion.div
          className="w-full lg:w-2/3 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 flex items-center justify-center lg:justify-start gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <FiUser className="text-blue-500" size={32} /> About Me
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Hey there, I'm Kedhareswar – a creative soul navigating the web design and development realm from Visakhapatnam, India. By day, I spearhead projects as a backend developer. By night, I dive into freelance gigs, crafting my own innovative products. Amidst this whirlwind, I indulge in penning articles, weaving poetry, and delving into the fascinating worlds of machine learning and AI. I'm a perpetual learner, endlessly curious, always seeking out new frontiers.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
