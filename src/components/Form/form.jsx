import "./form.css";
import { useState } from "react";

function Form() {
  const [parentName, setParentName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [whyJoin, setWhyJoin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      "https://script.google.com/macros/s/AKfycbwL7NLYHjf2PRLBGwiOIKZ0qDSIvtflBvBPvavOMo3Q6IjY5X0J8NeISre26zWnMvKQLg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentName,
          age,
          phone,
          whyJoin,
        }),
      },
    );

    alert("Application submitted successfully!");

    // optional reset
    setParentName("");
    setAge("");
    setPhone("");
    setWhyJoin("");
  };

  return (
    <section id="join" className="section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="small-title">RECRUITMENT_PROTOCOL // ACTIVE</p>

          <h2 className="fw-bold display-5">
            How to <span className="title-red">Apply</span>
          </h2>

          <p className="text-secondary">
            Submit your information, and become part of Abu-Hammad Hack Club.
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="join-box">
            <p className="join-title">INITIATE_APPLICATION_PROTOCOL</p>
            <hr />

            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label custom-label">YOUR_NAME</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Entry required..."
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label custom-label">AGE</label>
                  <input
                    type="number"
                    className="form-control custom-input"
                    placeholder="Enter age..."
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label custom-label">
                    PHONE_NUMBER
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="+20..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label custom-label">
                    WHY_DO_YOU_WANT_TO_JOIN?
                  </label>
                  <textarea
                    rows="4"
                    className="form-control custom-input"
                    placeholder="Describe why you want to be a part..."
                    value={whyJoin}
                    onChange={(e) => setWhyJoin(e.target.value)}
                    required
                  />
                </div>
              </div>

              <hr className="mt-5" />

              <button type="submit" className="join-submit w-100">
                INITIATE_HACK
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}

export default Form;
