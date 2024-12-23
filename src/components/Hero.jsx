import React, { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import {FaInstagram,FaTwitterSquare } from "react-icons/fa";

function Hero() {
  const personalData = {
    name: "Kedhareswar Matha",
    github: "https://github.com/Kedhar-mt",
    linkedIn: "https://www.linkedin.com/in/kedhareswar-matha-436803254/",
    leetcode: "https://leetcode.com",
    resume: "src/assets/Resume October (1).pdf",
    twitter:"https://twitter.com/your-profile",
    instagram:"https://instagram.com/your-profile",
  };

  const socialLinks = [
    { href: personalData.github, Icon: BsGithub },
    { href: personalData.linkedIn, Icon: BsLinkedin },
    { href: personalData.leetcode, Icon: SiLeetcode },
    {href:personalData.twitter, Icon: FaTwitterSquare},
    { href: personalData.instagram, Icon: FaInstagram },
  ];

  const designations = [
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
  ];

  const [currentDesignation, setCurrentDesignation] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        // Type out the current designation
        setCurrentDesignation((prev) => {
          const targetDesignation = designations[index];
          return targetDesignation.slice(0, prev.length + 1);
        });

        if (currentDesignation.length === designations[index].length) {
          setIsTyping(false); // Stop typing once the designation is complete
        }
      } else {
        // Delete the current designation
        setCurrentDesignation((prev) => {
          return prev.slice(0, prev.length - 1);
        });

        if (currentDesignation.length === 0) {
          setIsTyping(true); // Start typing again
          setIndex((prevIndex) => (prevIndex + 1) % designations.length); // Cycle to the next designation
        }
      }
    }, 80); // Decrease this value to increase speed (faster typing)

    return () => clearInterval(typingInterval); // Clean up the interval on unmount
  }, [currentDesignation, index, isTyping]);

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mx-4 lg:mx-16">
        {/* Left Section - Personal Info */}
        <div className="flex flex-col items-start p-6 max-w-xl">
          <h1 className="text-4xl font-bold mb-8">
            Hello, <br /> This is{" "}
            <span className="text-pink-500">{personalData.name}</span>
            <br />
            <span className="text-[#16f2b3]">{currentDesignation}</span>
          </h1>

          {/* Social Links */}
          <div className="my-8 flex gap-6">
            {socialLinks.map(({ href, Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-125 transition-all duration-300"
              >
                <Icon size={30} />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-pink-500 rounded-full p-[1px]"
            >
              <button className="px-6 py-2 md:px-12 md:py-3 text-base md:text-lg bg-[#0d1224] rounded-full text-white hover:scale-110 transition-all">
                <RiContactsFill size={14} /> Contact me
              </button>
            </a>
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-violet-600 rounded-full px-6 py-2 md:px-12 md:py-3 text-base md:text-lg text-white hover:scale-110 transition-all"
            >
              <MdDownload size={14} /> Get Resume
            </a>
          </div>
        </div>

        {/* Right Section - Code Snippet */}
        <div className="bg-gradient-to-r from-[#0a0d37] rounded-lg border border-[#1b2c68a0] relative max-w-xl">
          <div className="px-6 py-6">
            <div className="flex space-x-3">
              <div className="h-4 w-4 rounded-full bg-red-400"></div>
              <div className="h-4 w-4 rounded-full bg-orange-400"></div>
              <div className="h-4 w-4 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="px-6 py-6 border-t-[2px] border-indigo-900">
            <code className="font-mono text-sm md:text-base lg:text-lg">
              <div className="blink">
                <span className="text-pink-500">const</span>{" "}
                <span className="text-white">coder</span> = {"{"}
              </div>
              <div className="ml-6">
                <span className="text-white">name: </span>
                <span className="text-amber-300">'Kedhareswar'</span>,
              </div>
              <div className="ml-6">
                <span className="text-white">skills: </span>
                <span className="text-amber-300">
                  ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB','Java','Python']
                </span>
                ,
              </div>
              <div className="ml-6">
                <span className="text-white">hardWorker: </span>
                <span className="text-orange-400">true</span> ,
              </div>
              <div className="ml-6">
                <span className="text-white">quickLearner: </span>
                <span className="text-orange-400">true</span> ,
              </div>
              <div className="ml-6">
                <span className="text-white">problemSolver: </span>
                <span className="text-orange-400">true</span> ,
              </div>
              <div className="ml-6">{"};"}</div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
