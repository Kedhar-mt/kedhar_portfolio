import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa'; // Import laptop icon
import Card from './Card';
import projectData from '../projectData'; // Import the project data

const Works = () => {
  // Filter the specific six projects based on their titles
  const selectedProjects = [
    "Qr-based Exit Management System",
    "Role-Based Access Control",
    "React E-Commerce",
    "Captcha Solver",
    "Shopnest Ecommerce Website",
    "Education Website",
  ];

  // Flatten projectData to an array and filter the required projects
  const filteredProjects = Object.values(projectData)
    .flat()
    .filter((project) => selectedProjects.includes(project.title));

  return (
    <section
      id="works"
      className="py-20 px-10 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    >
      <div className="container mx-auto text-center">
        {/* Updated Heading with Laptop Icon */}
        <motion.h2
          className="text-4xl font-bold mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FaLaptopCode className="text-teal-500" size={32} /> Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <a
            href="/projects" // Replace with the route for your projects page
            className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
