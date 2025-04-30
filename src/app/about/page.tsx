'use client';

import { motion } from 'framer-motion';
import Footer from '../components/footer';
import './about.css';

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>About Us</h1>
          <p>
            Welcome to Travelastic, where we craft extraordinary digital experiences. Our mission is to inspire and
            connect through design and technology.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <motion.div
          className="intro-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Who We Are</h2>
          <p>
            At Travelastic, we are a team of passionate developers, designers, and creators dedicated to delivering
            premium digital solutions. We believe in the power of simplicity and elegance to transform ideas into
            reality.
          </p>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.MPyHeK9rmLLcj4kXeyUkPgHaB1?w=720&h=178&rs=1&pid=ImgDetMain"
            alt="Team working together"
            className="intro-image"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="about-skills-section">
        <motion.div
          className="skills-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Expertise</h2>
          <div className="skills-grid">
            <motion.div
              className="skill-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2024/02/05/10/51/web-development-8554218_1280.jpg"
                alt="Web Development"
                className="skill-image"
              />
              <h3>Web Development</h3>
              <p>Creating responsive, scalable, and modern web applications.</p>
            </motion.div>
            <motion.div
              className="skill-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://www.marktechpost.com/wp-content/uploads/2023/07/08-scaled.jpg"
                alt="UI/UX Design"
                className="skill-image"
              />
              <h3>UI/UX Design</h3>
              <p>Designing intuitive and visually stunning user experiences.</p>
            </motion.div>
            <motion.div
              className="skill-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://www.residualrank.com/wp-content/uploads/2015/02/branding-strategy-1040x630.jpg"
                alt="Brand Strategy"
                className="skill-image"
              />
              <h3>Brand Strategy</h3>
              <p>Helping brands establish a strong and memorable identity.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="about-contact-section">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Let’s Connect</h2>
          <p>
            We’re always excited to collaborate on new projects or discuss ideas. Reach out to us, and let’s create
            something amazing together.
          </p>
          <motion.a
            href="mailto:hello@travelastic.com"
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}