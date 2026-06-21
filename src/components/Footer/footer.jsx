import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h3>
            {" "}
            <span>Abu-Hammad </span>Hack Club
          </h3>
          <p>
            Building future developers through learning, coding, and innovation.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#join">Apply</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#learn">Learn</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Egypt, Sharkia, Abu-hammad</p>
          <p>📧 hackclub@email.com</p>
          <p>📱 +20 000 000 000</p>
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