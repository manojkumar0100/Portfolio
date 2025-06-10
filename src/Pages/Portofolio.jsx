// FullWidthTabs.js with hardcoded project data

import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";
import project4Img from "../assets/screenshots/project4.png";
import project1Img from "../assets/screenshots/project1.png" // adjust path based on your folder depth


import project2Img from "../assets/screenshots/project2.png" // adjust path based on your folder depth

import project6Img from "../assets/screenshots/project6.png" // adjust path based on your folder depth

import project3Img from "../assets/screenshots/project3.png" // adjust path based on your folder depth

import project5Img from "../assets/screenshots/project5.png" // adjust path based on your folder depth

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "c.svg", language: "C++" },
  { icon: "java.svg", language: "Java" },
  { icon: "tailwind.svg", language: "Tailwind" },
  { icon: "typescript.svg", language: "TypeScript" },
  { icon: "react.svg", language: "React" },
  { icon: "angular.svg", language: "Angular" },
  { icon: "nodejs.svg", language: "Node.js" },
  { icon: "dotnet.svg", language: ".NET" },
  { icon: "sqlserver.svg", language: "SQL Server" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "git.svg", language: "Git" },
  { icon: "azure.svg", language: "Azure" },

];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
  AOS.init({ once: false });
  // Save projects to localStorage for detail page
  localStorage.setItem("projects", JSON.stringify(hardcodedProjects));
}, []);

  // ...existing code...
const hardcodedProjects = [
  {
    id: 1,
    Img: project1Img,
    Title: "Smart Retail",
    Description: "SmartRetail is a secure, scalable full-stack E-Commerce application built using Angular, .NET Web API. It features JWT-based authentication, role-based access control, and seamless Stripe-integrated checkout. The platform includes Firebase push notifications, real-time cart and wishlist synchronization, smart inventory dashboards, and a dynamic product reviews system. Users benefit from personalized product recommendations, order tracking, and PDF invoice generation, while admins can manage products efficiently through a dedicated panel. The application is fully responsive and optimized for both mobile and desktop experiences.",
    Link: "https://smartretailapp.azurewebsites.net/",
    TechStack: [
  "Angular",
  "TypeScript",
  "Tailwind CSS",
  "ASP.NET Web API",
  "Entity Framework Core",
  "MS SQL Server",
  "JWT Authentication",
  "Stripe",
  "Firebase"
],
    Features: [
      "Secure login with user/admin access control",
      "Seamless and secure payment gateway integration",
      "Firebase-powered notifications for orders & updates",
      "Live cart, wishlist, and order tracking across sessions"
    ],
    Github: "https://github.com/manojkumar0100/SmartRetail-EcommerceApp--Angular-DotNet"
  },
  {
    id: 2,
    Img: project2Img,
    Title: "Type Master",
    Description: "Type Master is a lightweight Windows desktop typing test application developed using C# and multithreading. It delivers real-time speed and accuracy feedback with a distraction-free UI, enabling users to enhance typing skills through precise performance monitoring and detailed result summaries.",
    //Link: "https://yourportfolio.vercel.app",
    TechStack: [
  "C#",
  ".NET (WinForms/WPF)",
  "System.Threading (Multithreading)",
  "Windows Desktop"
],
    Features: [
  "Real-time accuracy and WPM tracking",
  "Smooth UI with multithreaded performance",
  "Detailed typing result summary",
  "Minimalist and distraction-free interface"
],
    Github: "https://github.com/manojkumar0100/TypeMaster-DotNet"
  },
  {
    id: 6,
    Img: project6Img,
    Title: "RedStore",
    Description: "RedStore is an online shopping web app where users can browse products, add to cart, and place orders. It supports user registration, login, and order history tracking. Users can filter and search products by category, brand, or price. Admins can manage products and update order statuses via a dedicated panel. The app uses Ajax for smooth, dynamic interactions and sends email notifications for orders and registration. Built with Node.js, EJS, MySQL, and deployed on Heroku with AWS RDS.",
    //Link: "https://github.com/username/quiz-app",
    TechStack: [
  "Node.js",
  "Express",
  "EJS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "Ajax",
  "MySQL",
],
    Features: [
  "User registration, login, and order history tracking",
  "Product filtering and search by category, brand, and price",
  "Shopping cart with checkout, invoice generation, and order tracking",
  "Admin panel for managing products and order statuses"
],
    Github: "https://github.com/manojkumar0100/RedStore-Ecommerce"
  },
  {
    id: 4,
    Img: project4Img, // Use the imported image variable
    Title: "Club Sphere",
    Description: "A centralized full-stack platform built with React and Node.js to streamline college club interactions, featuring role-based JWT authentication, Firebase-powered real-time push notifications, and dynamic content feeds. It enables students to follow clubs, like/comment/bookmark posts, and receive instant updates. Super Admins can assign Club Admins who manage posts, while users enjoy a personalized dashboard powered by intelligent content caching and REST APIs, boosting engagement and responsiveness.",
    Link: "https://clubsphereapp.azurewebsites.net/",
    TechStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Firebase", "Azure"],
    Features: [
  "Role-based JWT authentication and authorization",
  "Real-time push notifications using Firebase",
  "Interactive post management with likes, comments, and bookmarks",
  "Personalized dashboards with dynamic content delivery"
],
    Github: "https://github.com/manojkumar0100/ClubSphere-React-NodeJS"
  },
  {
    id: 5,
    Img: project5Img,
    Title: "Portfolio",
    Description: "Portfolio V5 is a modern and visually appealing personal portfolio website built to showcase skills, projects, and contact information. It leverages ReactJS for a dynamic frontend and Tailwind CSS for responsive, clean styling. Animations and interactive UI elements are powered by AOS and Framer Motion, creating a smooth user experience. Firebase is used for backend services, and Material UI along with Lucide icons enhance the design. This project is easy to run locally and ready for production deployment.",
    Link: "https://github.com/username/weather-app",
    TechStack: [
  "ReactJS",
  "Tailwind CSS",
  "AOS",
  "Firebase",
  "Framer Motion",
  "Lucide",
  "Material UI",
  "SweetAlert2"
]
,
    Features: [
  "Responsive and modern design with Tailwind CSS",
  "Smooth scroll animations using AOS and Framer Motion",
  "Interactive UI components with Material UI and Lucide icons",
  "Firebase integration for backend services",
  "Easy setup and deployment with npm scripts",
  "SweetAlert2 for beautiful alert messages"
]
,
    Github: "https://github.com/manojkumar0100/Portfolio"
  },
  
  {
    id: 3,
    Img: project3Img,
    Title: "Tiny URL",
    Description: "Tiny URL is a full-stack web application that allows users to shorten long URLs into compact, easily shareable links. Users can register and log in to manage their own collection of shortened URLs. The application provides the flexibility to either generate a random shortened URL using a hashing algorithm or allow users to define a custom alias. All URL data is securely stored in a MongoDB collection, enabling persistent access and management. This project uses server-side rendering with EJS and incorporates authentication, URL hashing, and responsive UI design for seamless usability across devices.",
    TechStack: ["EJS", "Node js", "Javascript", "MongoDB", "Express", "HTML", "CSS"],
    Features: [
  "User login and authentication",
  "Shorten URLs using hashing for unique keys",
  "Create custom or default shortened URLs",
  "Store and manage URLs in a database"
],
    Github: "https://github.com/manojkumar0100/Tiny-Url"
  },
];
// ...existing code...

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback(() => {
    setShowAllProjects(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? hardcodedProjects : hardcodedProjects.slice(0, initialItems);

  return (
    
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)", backdropFilter: "blur(10px)", zIndex: 0 } }} className="md:px-4">
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth" sx={{ minHeight: "70px", "& .MuiTab-root": { fontSize: { xs: "0.9rem", md: "1rem" }, fontWeight: "600", color: "#94a3b8", textTransform: "none", transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", padding: "20px 0", zIndex: 1, margin: "8px", borderRadius: "12px", "&:hover": { color: "#ffffff", backgroundColor: "rgba(139, 92, 246, 0.1)", transform: "translateY(-2px)", "& .lucide": { transform: "scale(1.1) rotate(5deg)" } }, "&.Mui-selected": { color: "#fff", background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))", boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)", "& .lucide": { color: "#a78bfa" } } }, "& .MuiTabs-indicator": { height: 0 }, "& .MuiTabs-flexContainer": { gap: "8px" } }}>
            <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Projects" {...a11yProps(0)} />
            {/* <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} label="Certificates" {...a11yProps(1)} /> */}
            <Tab icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {hardcodedProjects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={toggleShowMore}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          {/* Tech Stack */}
          
          <TabPanel value={value} index={1} dir={theme.direction}>
            
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <div>1</div>
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
