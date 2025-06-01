import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import { FaCode, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <motion.section
      id="projects"
      className="projects-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
    >
      <motion.h5
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        {showAll ? "All Projects" : "Featured Projects"}
      </motion.h5>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="project-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            />

            <motion.h6
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              {project.title}
            </motion.h6>

            <motion.p
              className="project-date"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              {project.date}
            </motion.p>

            <motion.p
              className="project-description"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              {project.description}
            </motion.p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <FaCode />
              </motion.a>

              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="view-all-button-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          className="view-all-button"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
