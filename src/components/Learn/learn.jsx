import "./learn.css";

function Learn() {
  return (
    <section id="learn" className="section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <p className="small-title">MIN_E7NA // OUR_PHILOSOPHY</p>

            <h2 className="fw-bold display-5">
              Learn by <span className="text-red">Doing.</span>
            </h2>

            <p className="mt-4 learn-text text-secondary">
              We believe the best way to learn is to build something you
              actually care about. <br />
              No textbooks, no lectures.
              <br />
              Just a workbench, a community, and the tools to make it real.
            </p>

            <div className="steps mt-5">
              <div className="step-box">
                <span>01.</span>
                Pick a project you love.
              </div>

              <div className="step-box">
                <span>02.</span>
                Break things until they work.
              </div>

              <div className="step-box">
                <span>03.</span>
                Ship it to the world.
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-md-6">
                <img src="/learn5.png" className="img-fluid learn-img" alt="" />
              </div>

              <div className="col-md-6">
                <img
                  src="/learn2.png"
                  className="img-fluid learn-img large-img"
                  alt=""
                />
              </div>

              <div className="col-md-6">
                <img
                  src="/learn1.png"
                  className="img-fluid learn-img large-img"
                  alt=""
                />
              </div>
            </div>

            <div className="text-end mt-3">
              <button className="community-btn">COMMUNITY_DRIVEN</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default Learn;