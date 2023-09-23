import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import PopularCourse from "../../Component/Course/PopularCourse";
import Cta from "../../Component/Cta/Cta";
import GotoTop from "../../Component/GotoTop";

function About() {
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
        <Home3Header joinBtn={true} />
        <Banner title="About Us" background="assets/images/inner-banner.jpg" />
        <PopularCourse />
        <Cta />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default About;
