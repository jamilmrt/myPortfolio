import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "./index.css";
import "./App.css"; // Import the new CSS file


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-around items-center bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Jamil Aktar</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-4">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Jamil Aktar
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Web Developer | React Enthusiast | Lifelong Learner
        </motion.p>
        <div className="flex space-x-6 mt-6 text-2xl">
          <a href="https://github.com/jamilmrt/" className="hover:text-blue-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jamil-aktar-8a9566179/" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="mailto:rtk.sorry@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
          <a href="https://my-portfolio-one-chi-29.vercel.app/" className="hover:text-blue-400"><CgWebsite /></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          I'm a passionate React developer who enjoys building user-friendly and dynamic websites. With a strong background in JavaScript, HTML, CSS, and backend integration, I focus on creating impactful web experiences.
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project {item}</h3>
              <p className="text-gray-400 mb-4">A brief description of the project with highlights of the tech stack and features.</p>
              <a href="#" className="text-blue-400 hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-4">I'd love to connect! Feel free to reach out by email or through my social channels.</p>
        <p className="text-blue-400">Email: jamilaktaraj@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 bg-gray-900">
        © 2020 Jamil Aktar. All rights reserved.
      </footer>
    </div>
  );
}
