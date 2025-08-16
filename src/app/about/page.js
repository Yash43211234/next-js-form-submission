
"use client";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <section className="hero">
        <h1>Welcome to Our Company</h1>
        <p>We create amazing web experiences using Next.js!</p>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Our Mission</h2>
          <p>Deliver high-quality web apps that make life easier for everyone.</p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>Innovate continuously and stay ahead in the tech world.</p>
        </div>
        <div className="card">
          <h2>Our Team</h2>
          <p>A group of passionate developers, designers, and thinkers.</p>
        </div>
      </section>
    </div>
  );
}
