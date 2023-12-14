import { useEffect, useState } from "react";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import GotoTop from "../../Component/GotoTop";
import Paper from "../../Component/Papers/Paper";
import PopularTopics2 from "../../Component/Course/PopularTopics2";

function About() {
return (
      <>
        <Home3Header joinBtn={true} />
        <Banner title="Call For Papers" background="assets/images/inner-banner.jpg" />
        <Paper />
        <PopularTopics2/>
        <Footer />
        <GotoTop />
      </>
    );
  }
 
export default About;
