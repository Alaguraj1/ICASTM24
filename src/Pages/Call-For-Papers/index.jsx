import { useEffect, useState } from "react";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import GotoTop from "../../Component/GotoTop";
import Paper from "../../Component/Papers/Paper";
import CourseHome3 from "../../Component/Course/CourseHome3";

function About() {
return (
      <>
        <Home3Header joinBtn={true} />
        <Banner title="Call For Papers" background="assets/images/inner-banner.jpg" />
        <Paper />
        <CourseHome3/>
        <Footer />
        <GotoTop />
      </>
    );
  }
 
export default About;
