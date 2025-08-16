import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="hero">
        <h1>Get in Touch</h1>
        <p>We’d love to hear from you! Drop a message below.</p>
      </section>

      <section className="contact-card">
        <h2>Contact Details</h2>
        <p>Email: contact@mycompany.com</p>
        <p>Phone: +91 1234567890</p>
        <p>Address: 123 Tech Street, India</p>
      </section>

      <section className="message-card">
        <h2>Send a Message</h2>
        <textarea placeholder="Write your message here..."></textarea>
        <button>Send Message</button>
      </section>
    </div>
  );
}
