import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import img from '../../assets/mail.png';
import img2 from "../../assets/git.png";
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const form = useRef(); // Create a reference for the form

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the form reference in sendForm
    emailjs.sendForm(
      "service_sr9sp4y",
      "template_w7grhtp",
      form.current,  // Now form.current is valid
      "DnKdWUbD2WGVBV50D"
    )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          }); // Clear form after submission
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <motion.section
      className="contact-container"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h5
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.03, duration: 0.5 }}
      >
        Contact Me
      </motion.h5>

      <div className="contact-content">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          I'm open to work in <strong>MERN stack</strong> and <strong>Full Stack</strong> projects.
          I can collaborate efficiently with teams. <br />
          For contacting me, please fill the form or mail me directly.
          For my project details, check the GitHub link below.
        </motion.p>

        <motion.div
          className="contact-form-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <form ref={form} onSubmit={handleSubmit}>  {/* Attach the ref to the form */}
            <div className="name-container">
              <motion.input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.1, duration: 0.5 }}
              />
              <motion.input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </div>

            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <motion.textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <motion.button
              type="submit"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              SEND
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manikirant315@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link"
          >
            <div className="contact-icon-card">
              <img src={img} alt="Mail Icon" />
            </div>
          </a>
          <a
            href="https://github.com/manikiran231"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link"
          >
            <div className="contact-icon-card">
              <img src={img2} alt="GitHub Icon" />
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
