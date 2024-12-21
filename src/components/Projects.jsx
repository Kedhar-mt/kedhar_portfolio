import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import projectData from "../projectData";
import { FaLaptopCode } from "react-icons/fa";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("React");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="py-20 px-10 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto">
        {/* Heading with Icon */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
            <FaLaptopCode className="text-teal-500" size={32} /> Projects
          </h2>

          {/* Category Buttons for Large Screens */}
          <div className="hidden md:flex justify-center space-x-4 mb-10">
            {Object.keys(projectData).map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-lg text-white ${
                  activeCategory === category
                    ? "bg-teal-500"
                    : "bg-gray-700 hover:bg-teal-500"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dropdown for Small Screens */}
          <div className="md:hidden text-center mb-10">
            <button
              onClick={toggleDropdown}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-teal-500"
            >
              Select Category
            </button>

            {isDropdownOpen && (
              <div className="mt-4 bg-gray-700 rounded-lg">
                {Object.keys(projectData).map((category) => (
                  <button
                    key={category}
                    className={`block px-6 py-2 w-full text-left text-white ${
                      activeCategory === category
                        ? "bg-teal-500"
                        : "hover:bg-teal-500"
                    }`}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsDropdownOpen(false); // Close dropdown after selection
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectData[activeCategory].map((project, index) => (
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

        {/* Back to Home Button */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-400 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
