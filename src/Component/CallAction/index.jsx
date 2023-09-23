import ProtoTypes from "prop-types";
function CallAction({ btnClass }) {
  return (
    <section
      className="cta-section-2"
      style={{ backgroundImage: "url(assets/images/home3/4.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{paddingRight:"75px"}}>
            <h2 className="sec-title mb-15"> Call for Papers</h2>
            <p>Authors are invited to submit their original and unpublished work for the conference.All the abstracts of the accepted/presented papers will be published in the conference proceedings </p>
            <a href="/registration" className="bisylms-btn-3">
              Know More
            </a>
          </div>
          <div className="col-md-6 reg_fee_sec">
            <h2 className="sec-title mb-15">
              Registration FEE
            </h2>
            {/* <p className="registration_fee">  </p> */}
            <p className="registration_price">
              For Indian Participants     :     ₹ 1,200
              <br /> For Foreigners 	         :     $ 50
            </p>
            <p>₹ 600 has to be paid as participation fee for additional members.</p>
            <a href="/registration" className={btnClass ? btnClass : "bisylms-btn-3"}>
              Registration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

CallAction.propTypes = {
  btnClass: ProtoTypes.string,
};

export default CallAction;
