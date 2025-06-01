import React from 'react';
import { motion } from 'framer-motion';  // Import motion from Framer Motion
import './Hero.css';
import img11 from '../../assets/mk.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Hero = () => {
    return (
        <motion.section
            className="hero-container"
            id="home"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            transition={{ duration: 1 }}  // Smooth fade-in effect for the whole section
        >
            <div className="hero-img">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.7 }}  // Fade-in and scale up for the profile image
                >
                    <img src={img11} alt="Profile" />
                </motion.div>
            </div>

            <div className="hero-content">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.3, duration: 0.7 }}  // Fade-in effect with slight upward motion
                >
                    Hello People!
                </motion.h2>
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.4, duration: 0.65 }}  // Fade-in effect with slight upward motion
                >
                    I'm ManiKiran
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.5, duration: 0.8 }}  // Fade-in effect for the text
                >
                    A Final Year Computer Science Student
                </motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.6, duration: 0.8 }}  // Fade-in effect for the text
                >
                    Aspiring MERN Stack Developer & Competitive Programmer
                </motion.p>

                {/* Profile Links with Icons inside Boxes */}
                <motion.div
                    className="hero-links"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.7, duration: 1 }}  // Fade-in effect for the icons
                >
                    <a href="https://github.com/manikiran231" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/tamminaina-manikiran-85b03726a/" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://leetcode.com/manikiran993" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <SiLeetcode size={28} />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/manikiro8wa/" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <SiGeeksforgeeks size={28} />
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
