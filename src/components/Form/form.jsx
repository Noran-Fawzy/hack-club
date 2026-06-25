import "./form.css";
import { useState } from "react";

function Form() {
  const [track, setTrack] = useState("");
  const [parentName, setParentName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [whyJoin, setWhyJoin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("track", track);
    formData.append("parentName", parentName);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("whyJoin", whyJoin);
    formData.append("track", track);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx0k-z7YK5WZ3oLh429_2h5Df_5rfPD-NMlqXsbjIq4l8yN0JFpIwvgVjOFifJjLFz_/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      alert("Application submitted successfully");

      setTrack("");
      setParentName("");
      setAge("");
      setPhone("");
      setWhyJoin("");
      setTrack("");
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
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
                <div className="col-12">
                  <label className="form-label custom-label">
                    SELECT_TRACK
                  </label>

                  <select
                    className="form-control custom-input"
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    required
                  >
                    <option value="">Choose a Track...</option>
                    <option value="Python">Python</option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="Web Development Advanced">
                      Web Development Advanced
                    </option>
                  </select>

                  {track === "Python" && (
                    <p className="track-description">
                      هتتعلم أساسيات البرمجة بلغة Python، المتغيرات، الشروط،
                      الحلقات، الدوال، وحل المشكلات البرمجية من خلال تطبيقات
                      ومشاريع عملية.
                    </p>
                  )}

                  {track === "Web Development" && (
                    <p className="track-description">
                      هتتعلم أساسيات تطوير الويب باستخدام HTML و CSS، وتصميم
                      صفحات ومواقع احترافية متجاوبة مع جميع الأجهزة.
                    </p>
                  )}

                  {track === "Web Development Advanced" && (
                    <p className="track-description">
                      هتتعلم JavaScript بشكل متقدم، والتعامل مع DOM و Events،
                      وبناء مواقع تفاعلية أكثر احترافية وتنفيذ مشاريع عملية
                      متقدمة.
                    </p>
                  )}
                </div>

                {track && (
                  <>
                    <div className="col-md-6">
                      <label className="form-label custom-label">
                        YOUR_NAME
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Enter Your Name..."
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
                        placeholder="Enter Your Age..."
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
                        placeholder="01..."
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

                    <div className="col-12">
                      <hr className="mt-3" />

                      <button
                        type="submit"
                        className="join-submit w-100"
                      >
                        INITIATE_HACK
                      </button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}

export default Form;