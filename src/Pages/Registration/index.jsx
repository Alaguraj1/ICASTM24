import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import GotoTop from "../../Component/GotoTop";
import { Link } from "react-router-dom";


function Registration() {

  return (
    <>
      <Home3Header joinBtn={true} />
      <Banner title="Registration" background="assets/images/inner-banner.jpg" />
      <section className="course-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-course-area">
                <div className="row">
                  <div className="col-md-12 reg_details">
                    <h5>Registration FEE </h5>
                    <p className="reg_li"><b>For Indian Participants</b> : ₹ 1,200<br />
                      <b>For Foreigners</b>: ₹ 4,250</p>
                    <p className="reg_paid">₹ 600 has to be paid as participation fee for additional members.</p>
                    <h6>Note :</h6>
                    <ul className="note_list">
                      <li>Online mode presentation will be considered on request (only for foreign participants)</li>
                    </ul>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button type="button" className="reg_btn"><Link to="https://admissions.kifees.com/events/kahe/icramst" target="blank" className="links">For Registration</Link></button>
                    </div>
                  </div>
                  {/* <div className="col-md-4 bank_details">
                    <h5>Bank Account Details</h5>
                    <ul className="account_lists">
                      <li className="account_list"><b>Bank </b>    : HDFC</li>
                      <li className="account_list"><b>Name </b>  : KAHE IEEE</li>
                      <li className="account_list"><b>A/c. No</b>: 50100660052321</li>
                      <li className="account_list"><b>Type</b>     : Savings</li>
                      <li className="account_list"><b>IFSC code</b>: HDFC0001068</li>
                      <li className="account_list"><b>Branch</b>     : Kalapatti</li>
                    </ul>

                  </div> */}
                </div>
                <div className="row" style={{ marginTop: "40px" }}>
                  <div className=" col-md-8">
                    <img src="assets/images/nanotechnology.jpeg" alt="" style={{ width: "100%" }} />
                  </div>
                  <div className="col-md-4">
                    <p className="free-book-content">A book titled “Fundamentals of Nanotechnology” will be
                      given as complimentary copy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* course section end  */}
      <Footer />
      <GotoTop />
    </>
  );
}
export default Registration;
