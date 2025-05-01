import frontendIcon from '../assets/frontend.png';
import backendIcon from '../assets/backend.png';
import toolsIcon from '../assets/tools.png';
import softSkillsIcon from '../assets/softskills.png';


import blogAppImage from '../assets/blg.png';
import medConnectImage from '../assets/med.png';
import project3Image from '../assets/port.png';
import project4Image from '../assets/proj4.png';
import devWizImage from '../assets/proj5.png';
// data.js

export const skills = {
    frontend: [
        { name: 'React', progress: 75 },
        { name: 'JavaScript', progress: 80 },
        { name: 'HTML', progress: 90 },
        { name: 'CSS', progress: 75 }
    ],
    backend: [
        { name: 'NodeJS', progress: 65 },
        { name: 'Express', progress: 65 },
        { name: 'MongoDB', progress: 70 },
        { name: 'SQL', progress: 50 }
    ],
    tools: [
        { name: 'Git', progress: 70 },
        { name: 'VS Code', progress: 75 },
        { name: 'Postman', progress: 60 },
        { name: 'MS Office', progress: 70 }
    ],
    languages: [
        { name: 'C', progress: 85 },
        { name: 'C++', progress: 80 },
        { name: 'Python', progress: 70 },
        { name: 'Java', progress: 55 }
    ]
};

  

export const WORK_EXPERIENCE = [
    {
        title: "AI-ML Intern at AICTE Eduskills",
        date: "April 2024 - June 2024",
        responsibilities: [
            "Learned ML and Deep Learning concepts.",
            "Built a Traffic Sign Recognition System using TensorFlow and Keras.",
            "Optimized models with hyperparameter tuning and early stopping.",
            "Documented processes and participated in peer reviews.",
        ],
    },
    {
        title: "Frontend Intern at Edubot Technologies",
        date: "Jan 2025 - March 2025",
        responsibilities: [
            "Developed responsive UIs using React.js and Tailwind CSS.",
            "Built User Dashboard and Admin Panel with backend API integration.",
            "Optimized components for performance and responsiveness.",
            "Collaborated with backend developers and designers.",
        ],
    },

];



export const PROJECTS = [
    {
        title: "Restaurant Finder",
        description: "A full-stack application integrating Zomato API to fetch real-time restaurant data. Features a Node.js backend, MongoDB database, and React frontend for searching restaurants, applying filters, and exploring details. Demonstrates API integration, database management, and responsive UI design.",
        date: "December 2024 - February 2025",
        image: blogAppImage,
        codeLink: "https://github.com/manikiran231/Restaurant-Finder",
        liveLink: "https://zomato-task.vercel.app/"
    },
    {
        title: "EduCraft",
        description: "An educational portal built with React, offering courses, user authentication, and user dashboard. Users can enroll in courses, view grades, and submit feedback directly via EmailJS. The backend is powered by Express.js and MongoDB for data storage & management, showcasing skills in full-stack development, database handling.",
        date: "March 2025 - Present",
        image: medConnectImage,
        codeLink: "https://github.com/manikiran231/EduCraft",
        liveLink: "https://edu-craft-three.vercel.app/"
    },    
    {
        title: "Portfolio Website",
        description: "A portfolio website built with React and Redux to showcase skills, projects, and professional information. Features interactive sections, responsive design, modern aesthetics, animations, smooth transitions, dynamic content rendering and highlighting frontend development and state management expertise",
        date: "October 2024 - November 2024",
        image: project3Image,
        codeLink: "https://github.com/manikiran231/Portfolio-Website",
        liveLink: "https://project3-live-link.com"
    },
    {
        title: "DevWiz",
        description: "DevWiz is an all-in-one utility app designed for developers. It combines essential developer tools like JSON formatter, color picker, password generator, and more, into a single, easy-to-use platform. Built using React and Vite, the app focuses on improving productivity by consolidating multiple tasks in one place.",
        date: "April 2024 - Present",
        image: devWizImage,  // (Update this with your actual imported image for DevWiz)
        codeLink: "https://github.com/manikiran231/devwiz",
        liveLink: "https://devwiz.onrender.com/"  // Replace with live deployment link if applicable
    },
    
    {
        title: "Delicious-Bite",
        description: "A recipe application built using HTML, CSS, and JavaScript that connects to an external API to fetch food data. Users can search for a specific dish and receive multiple suggestions. Upon selecting a recipe, they can view complete details showcasing skills in API integration, dynamic UI updates, and vanilla JavaScript development.",
        date: "April 2024 - May 2024",
        image: project4Image,  // (Update this with your actual imported image for Delicious-Bite)
        codeLink: "https://github.com/manikiran231/Delicious-Bite",
        liveLink: "https://delicious-bite-two.vercel.app/"
    },

    
];



