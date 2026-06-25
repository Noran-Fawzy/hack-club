import "./footer.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h3>
            <span>Abu-Hammad </span>Hack Club
          </h3>

          <p>
            Building future developers through learning, coding, and
            innovation.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

 <Link to="/">Home</Link>

          <a href="/#join">Apply</a>

          <Link to="/about">About</Link>

          <a href="/#learn">Learn</a>

          <a href="/#projects">Projects</a>

         
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://maps.google.com/?q=Abu-Hammad,Sharkia,Egypt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abu-Hammad, Sharkia, Egypt
            </a>
          </p>

          <p>
            <FaWhatsapp />{" "}
            <a
              href="https://wa.me/201060822030"
              target="_blank"
              rel="noopener noreferrer"
            >
              +20 106 082 2030
            </a>
          </p>

          <p>
            <FaEnvelope />{" "}
            <a href="mailto:hackclub00@gmail.com">
              hackclub00@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="divider"></div>

        <p>
          © {new Date().getFullYear()} Abu-Hammad Hack Club. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;