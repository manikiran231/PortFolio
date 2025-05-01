import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa"; // Icons

const Projects = () => {
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
        Projects
      </motion.h5>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
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
                <FaCode /> {/* Code icon */}
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
                <FaExternalLinkAlt /> {/* Live link icon */}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
