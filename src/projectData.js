// src/projectData.js
import qr from "./assets/qr.jpg";
import captchacover from "./assets/captchacover.jpg";
import reactecomm from "./assets/reactecomm.webp";
import rbac4 from "./assets/rbac4.webp";
import ecom from "./assets/ecom.jpg";
import edu from "./assets/edu.jpg";
import ipl from "./assets/ipl.jpg";
import TaskTracker from "./assets/Task.png";
import todolist2 from "./assets/todolist2.png";
import fr from "./assets/fr.jpg";
import resto from "./assets/restaurant.avif";
import pancreatic from "./assets/pancreatic.jpg";
import instiparty from "./assets/instiparty.png";
import la from "./assets/la.jpg";
import td from "./assets/td.png";
import chat from "./assets/chatty.png"
import tourism from "./assets/tourism3.jpg"
import translator from "./assets/Translator.jpg"
import movie from "./assets/movie.jpg"

const projectData = {
  React: [
    {
      title: "Qr-based Exit Management System",
      description:
        "This project tracks the attendance in and outs of faculties and students in my college in real time",
      imgSrc: qr,
      liveLink: "https://college-monitoring-panel.netlify.app/",
      codeLink: "https://github.com/Kedhar-mt/Web-App-of-QR--Based-Exit-Management-System",
    },
    {
      title: "MovieVerse",
      description:
        "Built a dynamic movie website leveraging ReactJS, GraphQL, and ExpressJS for seamless data fetching and user interaction.",
      imgSrc: movie,
      liveLink: "https://movie-verse-nine.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/MovieVerse-Client",
    },
    {
      title: "Basic Chat-App",
      description:
        "I developed a basic chat app using Socket.io,React Js,Express Js",
      imgSrc: chat,
      liveLink: "https://github.com/Kedhar-mt/Chat_App",
      codeLink: "https://github.com/Kedhar-mt/Chat_App",
    },
    {
      title: "Role-Based Access Control",
      description: "A Reactjs RBAC system for secure authentication.",
      imgSrc: rbac4,
      liveLink: "https://role-based-access-control-system-two.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/Role_Based_Access_Control_System",
    },
    {
      title: "React E-Commerce",
      description: "An e-commerce application built with Reactjs.",
      imgSrc: reactecomm,
      liveLink: "https://react-ecommerce-website-murex.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/React_Ecommerce_Website",
    },
    {
      title: "Captcha Solver",
      description: "A MERN stack app for solving captchas to earn coins.",
      imgSrc: captchacover,
      liveLink: "https://captcha-solver-app.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/Captcha_Solver",
    },
    {
      title: "Education Website",
      description: "An educational website using ejs,express and mongodb.",
      imgSrc: edu,
      liveLink: "https://github.com/Kedhar-mt/Aakash_Website",
      codeLink: "https://github.com/Kedhar-mt/Aakash_Website",
    },
    {
      title: "Ipl Dashboard",
      description:
        "This project contains the dashboard and stats of the teams in IPL using React JS.",
      imgSrc: ipl,
      liveLink: "https://ipl-dashboard-neon.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/IPL_DASHBOARD",
    },
    {
      title: "Task Tracker",
      description:
        "A tool to efficiently organize, manage, and prioritize daily tasks with real-time tracking.",
      imgSrc: TaskTracker,
      liveLink: "https://react-task-tracker-steel.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/React-Task-Tracker",
    },
    {
      title: "Food Recipe App",
      description:
        "A handy app to track and calculate the calorie content of meals for healthier eating habits.",
      imgSrc: fr,
      liveLink: "https://recipe-lovat-ten.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/Recipe",
    },
    {
      title: "To do list",
      description:
        "A simple and intuitive app for managing personal tasks, ensuring better productivity and focus.",
      imgSrc: todolist2,
      liveLink: "https://to-do-list-five-blue.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/To_Do_List",
    },
  ],
  Java: [
    {
      title: "Shopnest Ecommerce Website",
      description:
        "A feature-rich ecommerce platform with secure login and signup functionality implemented using Java, providing a seamless shopping experience.",
      imgSrc: ecom,
      liveLink: "https://github.com/Kedhar-mt/Shopnest-E-commerce-website",
      codeLink: "https://github.com/Kedhar-mt/Shopnest-E-commerce-website",
    },
  ],
  Python: [
    {
      title: "Pancreatic Cancer Detection",
      description:
        "A machine learning-based application that uses XGBoost and LightGBM algorithms to analyze medical data for early detection.",
      imgSrc: pancreatic,
      liveLink: "https://github.com/Kedhar-mt/Pancreas-Cancer_Detection",
      codeLink: "https://github.com/Kedhar-mt/Pancreas-Cancer_Detection",
    },
    {
      title: "Language Translator",
      description:
        "This project analyzes server log files to extract insights like IP request counts, top endpoints, and suspicious activities, aiding in web application monitoring and security.",
      imgSrc: translator,
      liveLink: "https://github.com/Kedhar-mt/Language_Translator",
      codeLink: "https://github.com/Kedhar-mt/Language_Translator",
    },
    {
      title: "Log Analysis Project",
      description:
        "This project analyzes server log files to extract insights like IP request counts, top endpoints, and suspicious activities, aiding in web application monitoring and security.",
      imgSrc: la,
      liveLink: "https://github.com/Kedhar-mt/log_analysis_project",
      codeLink: "https://github.com/Kedhar-mt/log_analysis_project",
    },
  ],
  "Basic Web Development": [
    {
      title: "Sam's Griddle Restaurant Website",
      description:
        "An interactive website for a restaurant showcasing menu, location, and reservation system.",
      imgSrc: resto,
      liveLink: "https://restro-page.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/Mc_Donalds_Website",
    },
    {
      title: "Tourism Website",
      description:
        "Discover and plan your perfect getaway with our comprehensive tourism website, offering curated destinations, travel guides, and booking solutions",
      imgSrc: tourism,
      liveLink: "https://tourism-website-blush.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/Tourism_Website",
    },
    {
      title: "To-Do List",
      description:
        "A basic todo list using Html,Css & Javascript",
      imgSrc: td,
      liveLink: "https://to-do-list-five-blue.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/To_Do_List",
    },
    {
      title: "Instiparty Online Pvt Ltd",
      description:
        "A website showcasing InstiParty Online Pvt Ltd's frontend design using HTML & CSS.",
      imgSrc: instiparty,
      liveLink: "https://instiparty-website.vercel.app/",
      codeLink: "https://github.com/Kedhar-mt/Instiparty_Website",
    },
  ],
};

export default projectData;
