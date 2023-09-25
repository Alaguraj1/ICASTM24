import React from "react";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import GotoTop from "../../Component/GotoTop";
import FeatureCourse from "../../Component/Course/FeatureCourse";


function ChiefGuests() {

 return(
      <>
        <Home3Header  joinBtn={true} />
        <Banner title="Chief Guests" background="assets/images/inner-banner.jpg" />
        <section className="instructor-section">
              <FeatureCourse />
        </section>
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
export default ChiefGuests;
