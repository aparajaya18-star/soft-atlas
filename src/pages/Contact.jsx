import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="page">
    <section className="contact-page">
      <h1>Get in touch</h1>
      
      <div className="text-divider">
        ──── ✦ ───
      </div>

      <p className="contact-intro">
        If you'd like to talk about travel, projects, or anything else,
        you can find me here:
      </p>

      <div className="contact-list">
        <div className="contact-item">
          <span><MdEmail/>Email</span>
          <a href="mailto:aparajaya18@gmail.com">
            aparajaya18@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span><FaGithub />GitHub</span>
          <a
            href="https://github.com/aparajaya18-star"
            target="_blank"
            rel="noreferrer"
          >
            aparajaya18-star
          </a>
        </div>

        <div className="contact-item">
          <span><FaLinkedin />LinkedIn</span>
          <a
            href="https://linkedin.com/in/aparajaya-43a264366"
            target="_blank"
            rel="noreferrer"
          >
            Aparajaya
          </a>
        </div>

        <div className="contact-item">
          <span><FaCode />HackerRank</span>
          <a
            href="https://www.hackerrank.com/aparajaya18"
            target="_blank"
            rel="noreferrer"
          >
            aparajaya18
          </a>
        </div>

         <div className="contact-item">
          <span><FaInstagram />Instagram</span>
          <a
            href="https://instagram.com/aparajaya34"
            target="_blank"
            rel="noreferrer"
          >
            @aparajaya34
          </a>
        </div>
        
        <div className="text-divider">
          ──── ✦ ────
        </div>
      </div>
    </section>
    </section>
  );
}