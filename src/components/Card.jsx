import React, { useState } from "react";

const Card = ({ title, description, imgSrc, liveLink, codeLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white p-3 m-4 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="w-full h-72 relative overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Hover Content */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white flex flex-col items-center justify-center p-4 rounded-lg transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
