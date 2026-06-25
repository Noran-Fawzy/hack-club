import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <span
              className="badge bg-danger mb-3"
              style={{ transform: "rotate(-3deg)" }}
            >
              BUILD. CREATE. LEARN.
            </span>
            <h1 className="display-3 fw-bold">
              Where teens make
              <span className="title-red"> cool stuff.</span>
            </h1>

            <p className="text-secondary mt-5">
              A global community of makers, hackers, and technical artists. We
              don't do boring classes. We build robots, ship code, and design
              the future.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a
                href="#join"
                className="btn-main"
                style={{ textDecoration: "none" }}
              >
                START HERE
              </a>

             <Link className="nav-link" to="/about">
                <button className="btn-outline-green">LEARN MORE</button>{" "}
             </Link>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="card-dark p-3">
              <img src="/learn5.png" className="img-fluid" alt="Hero" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default Hero;