import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../utils/data'; // Import skills with progress values
import { Section } from './Section';
import './Skills.css';

const Skill = () => {
    return (
        <section id="skills" className="skill-section">
            <Section title="Technical Skills" id="skills">
                <div className="skill-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="skill-card"
                        >
                            <h3 className="skill-category-title">{category}</h3>
                            <div>
                                {items.map(({ name, progress }, index) => (
                                    <motion.div
                                        key={name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="skill-item"
                                    >
                                        <div className="skill-details">
                                            <p className="skill-name">{name}</p>
                                            <div className="skill-progress-track">
                                                {/* Animate width with Framer Motion */}
                                                <motion.div
                                                    className="skill-progress-bar"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${progress}%` }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </section>
    );
};

export default Skill;
