import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import Map from "../../Component/Map";
import GotoTop from "../../Component/GotoTop";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Home3Header  joinBtn={true} />
        {/* <Home3Header  /> */}
        <Banner title="Contact Us" background="assets/images/inner-banner.jpg" />
        <section className="contact-section">
          <div className="container">
            {/* <h2 style={{ marginBottom: "50px" }}>Contact Us</h2> */}

            <div className="row">
              <div className="col-md-4">
                <div>
                  <h5>Dr. P. Sakthivel</h5>
                  <p className="contact_event">For Event & Publication Query</p>
                  <a href="mailto:sakthivel.p@kahedu.edu.in">sakthivel.p@kahedu.edu.in</a>
                  <p>9952806070</p>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <h5>Dr. A.Manikandan</h5>
                  <p className="contact_event">For Registration Query </p>
                  <a href="mailto:manikandan.ayyar@kahedu.edu.in">manikandan.ayyar@kahedu.edu.in</a>
                  <p>9884354800</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact_details">
                  <h5>Dr. A. Shameem</h5>
                  <p className="contact_event">For Technical Query</p>
                  <a href="mailto:shameem.abdulsamad@kahedu.edu.in">shameem.abdulsamad@kahedu.edu.in</a>
                  <p>8248644074</p>
                </div>
                <div   style={{ marginTop: "30px" }}>
                  <h5>Dr. R.Suresh</h5>
                  <p className="contact_event">For Accommodation and Travel Query</p>
                  <a href="mailto:suresh.ranganathan@kahedu.edu.in">suresh.ranganathan@kahedu.edu.in</a>
                  <p>9941091461</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact_details">
                  <h5>Mr. A.Daniel Das</h5>
                  <p className="contact_event">For Accommodation and Travel Query</p>
                  <a href="mailto:danieldas.a@kahedu.edu.in">danieldas.a@kahedu.edu.in</a>
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
  return content;
}

export default Contact;
