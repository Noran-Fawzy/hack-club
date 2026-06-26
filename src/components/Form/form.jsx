import "./form.css";
import { useState } from "react";

function Form() {
  const [parentName, setParentName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [whyJoin, setWhyJoin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("parentName", parentName);
    formData.append("nationalId", nationalId);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("whyJoin", whyJoin);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx0k-z7YK5WZ3oLh429_2h5Df_5rfPD-NMlqXsbjIq4l8yN0JFpIwvgVjOFifJjLFz_/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      alert("تم إرسال الطلب بنجاح");

      setParentName("");
      setNationalId("");
      setAge("");
      setPhone("");
      setWhyJoin("");
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء إرسال الطلب");
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
            <p className="join-title">
              INITIATE_APPLICATION_PROTOCOL
            </p>

            <hr />

            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label custom-label">
                  YOUR_NAME
                  </label>

                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="اكتب اسمك..."
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label custom-label">
                NATIONAL_ID     
                  </label>

                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="اكتب الرقم القومي (14 رقم)..."
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    maxLength={14}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label custom-label">
                  AGE  
                  </label>

                  <input
                    type="number"
                    className="form-control custom-input"
                    placeholder="اكتب عمرك..."
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
                    placeholder="  ...01"
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
                    placeholder="اكتب إزاي هتسيب بصمتك في النادي..."
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