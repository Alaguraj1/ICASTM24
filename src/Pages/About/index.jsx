import { useEffect, useState } from "react";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import PopularCourse from "../../Component/Course/PopularCourse";
import Cta from "../../Component/Cta/Cta";
import GotoTop from "../../Component/GotoTop";

function About() {
return (
      <>
        <Home3Header joinBtn={true} />
        <Banner title="About Us" background="assets/images/inner-banner.jpg" />
        <PopularCourse />
        <Cta />
        <Footer />
        <GotoTop />
      </>
    );
  }
 
export default About;
