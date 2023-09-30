import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import Map from "../../Component/Map";
import GotoTop from "../../Component/GotoTop";
import { Link } from "react-router-dom";


function Contact() {
  return(
      <>
        <Home3Header  joinBtn={true} />
        {/* <Home3Header  /> */}
        <Banner title="Contact Us" background="assets/images/inner-banner.jpg" />
        <section className="contact-section">
          <div className="container">
            {/* <h2 style={{ marginBottom: "50px" }}>Contact Us</h2> */}
            <div style={{textAlign:"center",marginBottom:"50px"}}>
              <h5 style={{marginBottom:"10px"}}> International Conference on Recent Advancements in Materials<br/> Science and Technology (ICRAMST)</h5>
              <p  style={{marginBottom:"7px",fontSize: "14px", color:"black",lineHeight:"20px", fontWeight:"600"}}>Karpagam Academy of Higher Education,<br/> Coimbatore-641 021,<br/> Tamilnadu, India.</p>
              <Link to="mailto:icramst@kahedu.edu.in"><b>Mail</b>: icramst@kahedu.edu.in</Link>
            </div>

            <div className="row" style={{textAlign:"center"}}>
              <div className="col-md-4">
                <div>
                  <h5 style={{marginBottom:"10px"}}>Dr. P. Sakthivel</h5>
                  <p className="contact_event">For Event & Publication Query</p>
                  <Link to="mailto:sakthivel.p@kahedu.edu.in" className="contact-mail"> sakthivel.p@kahedu.edu.in</Link>
                  <p>9952806070</p>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <h5 style={{marginBottom:"10px"}}>Dr. A.Manikandan</h5>
                  <p className="contact_event">For Registration Query </p>
                  <Link to="mailto:manikandan.ayyar@kahedu.edu.in" className="contact-mail"> manikandan.ayyar@kahedu.edu.in</Link>
                  <p>9884354800</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact_details">
                  <h5 style={{marginBottom:"10px"}}>Dr. A. Shameem</h5>
                  <p className="contact_event">For Technical Query</p>
                  <Link to="mailto:shameem.abdulsamad@kahedu.edu.in" className="contact-mail">shameem.abdulsamad@kahedu.edu.in</Link>
                  <p>8248644074</p>
                </div>
                <div   style={{ marginTop: "30px" }}>
                  <h5 style={{marginBottom:"10px"}}>Dr. R.Suresh</h5>
                  <p className="contact_event">For Accommodation and Travel Query</p>
                  <Link to="mailto:suresh.ranganathan@kahedu.edu.in" className="contact-mail">suresh.ranganathan@kahedu.edu.in</Link>
                  <p>9941091461</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact_details">
                  <h5 style={{marginBottom:"10px"}}>Mr. A.Daniel Das</h5>
                  <p className="contact_event">For Accommodation and Travel Query</p>
                  <Link to="mailto:danieldas.a@kahedu.edu.in" className="contact-mail">danieldas.a@kahedu.edu.in</Link>
                  <p>8248786437</p>
                </div>
              </div>
            </div>
            <div className="row">
              <h3 className=" col-12 sponsors_head" >Sponsors</h3>
              <div className="col-md-4 sponsor-cover">
                <img src="assets/images/sponsor-logo-1.jpg" alt="" />
              </div>
              <div className="col-md-4 sponsor-cover">
                <img src="assets/images/sponsor-logo-2.jpg" alt="" />
              </div>
              <div className="col-md-4 sponsor-cover">
                <img src="assets/images/sponsor-logo-3.jpg" alt="" />
              </div>
            </div>

          </div>
        </section>
        <Map />
        <Footer />
        <GotoTop />
      </>
    );
  }
export default Contact;
