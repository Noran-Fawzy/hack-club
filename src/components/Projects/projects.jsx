import "./projects.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="small-title">OUR_WORK // PROJECT_SHOWCASE</p>

        <h2 className="fw-bold display-5 mb-5">
          Featured <span className="title-red">Projects</span>
        </h2>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="project-card">
              <img src="/project1.png" className="img-fluid" alt="" />

              <div className="p-4">
                <span className="project-tag">AI</span>

                <h4 className="mt-3">Study Assistant</h4>

                <p>
                  AI-powered tool that helps students organize notes and
                  generate quizzes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="project-card">
              <img src="/project2.png" className="img-fluid" alt="" />

              <div className="p-4">
                <span className="project-tag">ROBOTICS</span>

                <h4 className="mt-3">Autonomous Robot</h4>

                <p>Built with sensors and Arduino to navigate obstacles.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="project-card">
              <img src="/project3.png" className="img-fluid" alt="" />

              <div className="p-4">
                <span className="project-tag">WEB DEV</span>

                <h4 className="mt-3">Community Platform</h4>

                <p>A modern website connecting students and makers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-md-6">
            <div className="project-card horizontal-card">
              <img src="/project4.png" alt="" />

              <div className="p-4">
                <span className="project-tag">MOBILE APP</span>

                <h4 className="mt-3">Task Tracker</h4>

                <p>Productivity app developed by students.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="project-card horizontal-card">
              <img src="/project5.png" alt="" />

              <div className="p-4">
                <span className="project-tag">IOT</span>

                <h4 className="mt-3">Smart Greenhouse</h4>

                <p>Monitors temperature and humidity automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default Projects;