import { Link } from "react-router-dom";

function Cta() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: "url(assets/images/section-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ paddingRight: "75px" }}>
            <h2 className="sec-title mb-15"> Call for Papers</h2>
            <p>Authors are invited to submit their original and unpublished work for the conference.All the abstracts of the accepted/presented papers will be published in the conference proceedings </p>
            <Link to="/registration" className="bisylms-btn">
              Know More
            </Link>
          </div>
          
          <div className="col-md-6 reg_fee_sec" >
            <h2 className="sec-title mb-15">
            Registration FEE 
            </h2>
            <p className="registration_price">
              For Indian Participants     :     ₹ 1,200
              <br /> For Foreigners 	         :     $ 50
            </p>
            <p>₹ 600 has to be paid as participation fee for additional members.</p>
            <Link to="/registration" className="bisylms-btn">
              Registration
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
