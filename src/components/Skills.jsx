import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaTools,
  FaBolt,
  FaCloud,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiBootstrap,
  SiTailwindcss,
  SiGraphql,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS" },
    { icon: <FaJs size={40} className="text-yellow-500" />, name: "JavaScript" },
    { icon: <FaReact size={40} className="text-blue-400" />, name: "React" },
    { icon: <FaNodeJs size={40} className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress size={40} className="text-gray-600" />, name: "Express.js" },
    { icon: <SiMongodb size={40} className="text-green-700" />, name: "MongoDB" },
    { icon: <SiMysql size={40} className="text-blue-600" />, name: "MySQL" },
    { icon: <SiPython size={40} className="text-yellow-500" />, name: "Python" },
    { icon: <SiBootstrap size={40} className="text-purple-600" />, name: "Bootstrap" },
    { icon: <FaGitAlt size={40} className="text-red-600" />, name: "Git" },
    { icon: <FaJava size={40} className="text-red-600" />, name: "Java" },
    { icon: <SiTailwindcss size={40} className="text-teal-400" />, name: "Tailwind" },
    { icon: <FaCloud size={40} className="text-blue-400" />, name: "REST API" }, 
    { icon: <SiGraphql size={40} className="text-pink-500" />, name: "GraphQL" },
    { icon: <FaBolt size={40} className="text-yellow-400" />, name: "WebSockets" },
  ];

  const repeatedSkills = [...skills, ...skills, ...skills]; // Repeat skills for seamless animation

  return (
    <section
      id="skills"
      className="py-20 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    >
      <div className="container mx-auto text-center overflow-hidden">
        {/* Heading with Icon */}
        <motion.h2
          className="text-4xl font-bold mb-10 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FaTools className="text-yellow-500" size={32} /> Skills
        </motion.h2>
        <div className="relative">
          {/* Scrolling container */}
          <div
            className="flex gap-12 animate-scroll"
            style={{
              animation: "scroll 20s linear infinite",
              width: `${repeatedSkills.length * 120}px`, // Ensure wide enough container
            }}
          >
            {repeatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center hover:z-10 transition-transform transform hover:scale-110"
                style={{ minWidth: "100px" }}
              >
                <div className="w-20 h-20 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Custom animation for infinite scrolling */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
