import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import GotoTop from "../../Component/GotoTop";
import { Link } from "react-router-dom";


function Registration() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState("Call for Papers");

  return (
    <>
      <Home3Header joinBtn={true} />
      <Banner title="Registration" background="assets/images/inner-banner.jpg" />
      <section className="course-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-course-area">

                {/* <div className="course-tab-wrapper">
                    <ul className="course-tab-btn nav nav-tabs">
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={activeView === "Call for Papers" ? "active" : ""}
                        >
                          <i className="icon_ribbon_alt"></i>Call for Papers
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={
                            activeView === "Topics" ? "active" : ""
                          }
                        >
                          <i className="icon_book_alt"></i>Topics
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={
                            activeView === "Registration" ? "active" : ""
                          }
                        >
                          <i className="icon_profile"></i>Registration
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      {activeView === "Call for Papers" && (
                        <div
                          className="tab-pane fade in show active"
                          id="Call for Papers"
                          role="tabpanel"
                        >
                          <div className="overview-content row">
                            <div className="col-lg-4">
                              <img src="/assets/images/nanomaterials.jpg" alt="" className="nanomaterial" />
                            </div>
                            <div className="col-lg-8 call-paper">
                              <h4>Call for Papers</h4>
                              <p>
                                Authors are invited to submit their original and unpublished work for the conference. All the abstracts of the accepted/presented papers will be published in the conference proceedings (with ISBN). After a double-blind review of the full-length paper the selected manuscripts will be published in Web of Science, Scopus, INSPEC and Chemical Abstracts Service indexed conference proceedings.
                                We are also planning to publish the selected papers in SCI, SCOPUS indexed Journals based on the quality and merit of the work.
                                The theme of the conference covers a broad spectrum of Materials Science.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                     
                      {activeView === "Topics" && (
                        <div
                          className="tab-pane fade in show active"
                          id="Topics"
                          role="tabpanel"
                        >
                          <div className="curriculum-item" id="id_1">
                            <div className="card-header" id="cc_1">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_1"
                                  aria-expanded="true"
                                  aria-controls="acc_1"
                                >
                                  TOPICS
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_1"
                              className="collapse show"
                              aria-labelledby="cc_1"
                              data-parent="#id_1"
                            >
                              <div className="card-body row" style={{ marginBottom: "20px" }}>
                                <div className="col-md-6">
                                  <div className="ci-item with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Energy and Environment materials
                                    </h5>
                                  </div>
                                  <div className="ci-item ">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Nanomaterials
                                    </h5>
                                  </div>
                                  <div className="ci-item with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Polymers and Composites
                                    </h5>

                                  </div>
                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Powder Metallurgy
                                    </h5>

                                  </div>
                                  <div className="ci-item with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Composite Materials
                                    </h5>

                                  </div>

                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Bio and soft matter
                                    </h5>

                                  </div>

                                  <div className="ci-item with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Biorefining and Biofuels
                                    </h5>

                                  </div>

                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Drug Design
                                    </h5>

                                  </div>

                                  <div className="ci-item  with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Computational Materials
                                    </h5>

                                  </div>

                                  <div className="ci-item ">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Materials for Biomedical applications
                                    </h5>

                                  </div>

                                  <div className="ci-item with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Optical, Electronic and Magnetic materials
                                    </h5>

                                  </div>


                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Super Conductors & Spintronics
                                    </h5>

                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="ci-item  with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Crystals & Bulk materials
                                    </h5>

                                  </div>

                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Thin films & Coatings
                                    </h5>

                                  </div>

                                  <div className="ci-item  with-bg ">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Additive Manufacturing
                                    </h5>

                                  </div>

                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Materials Processing
                                    </h5>

                                  </div>

                                  <div className="ci-item  with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Sustainable Machining
                                    </h5>

                                  </div>

                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Building & Construction Materials
                                    </h5>

                                  </div>

                                  <div className="ci-item  with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Power &  Storage Materials
                                    </h5>

                                  </div>

                                  <div className="ci-item ">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Catalysts, Sensors
                                    </h5>

                                  </div>

                                  <div className="ci-item  with-bg">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Solar energy, Batteries, Fuel Cells
                                    </h5>

                                  </div>

                                  <div className="ci-item">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Hydrogen Energy
                                    </h5>

                                  </div>

                                  <div className="ci-item  with-bg ">
                                    <h5>
                                      <i className="icon_menu-square_alt2"></i>
                                      Structure and Properties of all Engineering Materials
                                    </h5>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      )}
                     
                      {activeView === "Registration" && (
                        <div
                          className="tab-pane fade in show active"
                          id="Registration"
                          role="tabpanel"
                        >

                          
                        </div>
                      )}

                    </div>
                  </div> */}

                <div className="row">
                  {/* <h3 className="col-12 reg_head" style={{ textAlign: "center", marginBottom: "50px" }}>Registration</h3> */}

                  <div className="col-md-8 reg_details">
                    <h5>Registration FEE </h5>
                    <p className="reg_li"><b>For Indian Participants</b> : ₹ 1,200<br />
                      <b>For Foreigners</b>:     $ 50</p>
                    <p className="reg_paid">₹ 600 has to be paid as participation fee for additional members.</p>

                    <h6>Note :</h6>
                    <ul className="note_list">
                      <li>
                        Article Publication Charge will be intimated separately through e-mail based on selection of the Journal/ Conference Proceedings if applicable.
                      </li>
                      <li>Online mode presentation will be considered on request (only for foreign participants)</li>
                    </ul>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <button type="button" className="reg_btn"><Link to="https://forms.gle/xDV8Wu4WwP5mQq5e7" target="blank" className="links">For Registration</Link></button>
                    </div>
                  </div>
                  <div className="col-md-4 bank_details">
                    <h5>Bank Account Details</h5>
                    <ul className="account_lists">
                      <li className="account_list"><b>Bank </b>    : HDFC</li>
                      <li className="account_list"><b>Name </b>  : KAHE IEEE</li>
                      <li className="account_list"><b>A/c. No</b>: 50100660052321</li>
                      <li className="account_list"><b>Type</b>     : Savings</li>
                      <li className="account_list"><b>IFSC code</b>: HDFC0001068</li>
                      <li className="account_list"><b>Branch</b>     : Kalapatti</li>
                    </ul>

                  </div>
                </div>
                <div className="row" style={{marginTop:"40px"}}>
                  <div className=" col-md-8">
                    <img src="assets/images/nanotechnology.jpeg" alt="" style={{width:"100%"}} />
                  </div>
                  <div className="col-md-4">
                  <p className="free-book-content">First 100 registrant will get a free-complimentary copy book entitled “Fundamentals of Nanotechnology” (Price: ₹ 250/-)</p>

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
