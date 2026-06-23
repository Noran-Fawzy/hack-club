import "./about.css";
import { FaLaptop, FaFolderOpen, FaUsers, FaGlobe } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="small-title">LOCAL_COMMUNITY // ACTIVE</p>

          <h2 className="fw-bold display-5">
            About <span className="title-red">Hack Club</span>
          </h2>

          <p className="text-secondary">
            Empowering the next generation through technology and creativity.
          </p>
        </div>

        <div className="about-box">
          <div className="about-content">
            <h3 className="about-heading">Abu-Hammad Hack Club</h3>

            <p>
              Abu-Hammad Hack Club is a student-led coding community based in
              Abu-Hammad, Sharkia. <br />
              Our mission is to introduce children and teenagers to the world of
              programming, technology, and digital creativity.
            </p>

            <p>
              Through workshops, hands-on projects, and collaborative learning,
              members gain practical skills in web development, problem solving,
              design, and modern technologies.
            </p>

            <p>
              We believe every student should have the opportunity to learn,
              create, and innovate regardless of their previous experience.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <h4>
                  <FaLaptop />
                </h4>
                <p>Coding</p>
              </div>

              <div className="stat-card">
                <h4>
                  <FaFolderOpen />
                </h4>
                <p>Projects</p>
              </div>

              <div className="stat-card">
                <h4>
                  <FaUsers />
                </h4>
                <p>Community</p>
              </div>

              <div className="stat-card">
                <h4>
                  <FaGlobe />
                </h4>
                <p>Impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}

export default About;

