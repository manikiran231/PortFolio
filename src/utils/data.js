import frontendIcon from '../assets/frontend.png';
import backendIcon from '../assets/backend.png';
import toolsIcon from '../assets/tools.png';
import softSkillsIcon from '../assets/softskills.png';


import blogAppImage from '../assets/blg.png';
import medConnectImage from '../assets/med.png';
import project3Image from '../assets/port.png';
import project4Image from '../assets/proj4.png';
import devWizImage from '../assets/proj5.png';
import blog from '../assets/proj6.png';
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
        title: "EduCraft",
        description: "An educational platform for course enrollment, feedback, and student-teacher interaction. It includes dashboards, real-time notifications, analytics, and secure auth, offering a scalable and user-friendly experience.",
        image: medConnectImage,
        codeLink: "https://github.com/manikiran231/EduCraft",
        liveLink: "https://edu-craft-three.vercel.app/",
        tags: ["React", "Express", "Node.js", "MongoDB", "EmailJS"]
    },
    {
        title: "DevWiz",
        description: "A productivity toolbox for developers featuring utilities like text analysers, code formatters, JSON validators, color pickers and many more. Built with React and Vite, it offers a modular and efficient experience in a single platform.",
        
        image: devWizImage,
        codeLink: "https://github.com/manikiran231/devwiz",
        liveLink: "https://devwiz.onrender.com/",
        tags: ["React", "Vite", "Toolbox App", "JavaScript", "UI/UX"]
    },
    {
        title: "Scribbly",
        description: "A full-stack blogging platform with JWT auth, blog CRUD, image uploads via Cloudinary, and a responsive EJS and Bootstrap based UI. Features include dark/light mode toggle, user dashboard, and file support.",
        
        image: blog,
        codeLink: "https://github.com/manikiran231/Scribbly",
        liveLink: "https://scribbly-qw4o.onrender.com",
        tags: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "JWT", "Bootstrap"]
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio site with animations, responsive design, and dynamic sections for skills, projects, and resume. Built using React and Redux for a smooth and interactive user experience.",
        
        image: project3Image,
        codeLink: "https://github.com/manikiran231/Portfolio-Website",
        liveLink: "https://project3-live-link.com",
        tags: ["React", "Redux", "Framer Motion", "Responsive Design"]
    },
    {
        title: "Restaurant Finder",
        description: "A full-stack web app that helps users discover restaurants by location, cuisine, and preferences. It features advanced search, Zomato API integration, user reviews, bookmarks, and interactive maps, with a responsive UI and secure backend.",
        image: blogAppImage,
        codeLink: "https://github.com/manikiran231/Restaurant-Finder",
        liveLink: "https://zomato-task.vercel.app/",
        tags: ["React", "Node.js", "MongoDB", "Express",]
    },
    {
        title: "Delicious-Bite",
        description: "A recipe finder app using JavaScript and external APIs. Users can search by ingredients, view instructions, nutrition info, and save recipes, all within a clean, responsive UI.",
        
        image: project4Image,
        codeLink: "https://github.com/manikiran231/Delicious-Bite",
        liveLink: "https://delicious-bite-two.vercel.app/",
        tags: ["HTML", "CSS", "JavaScript", "Recipe API", "Email JS"]
    }
];



