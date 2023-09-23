import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import GotoTop from "../../Component/GotoTop";
import FeatureCourse from "../../Component/Course/FeatureCourse";


function ChiefGuests() {
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
        <Banner title="Chief Guests" background="assets/images/inner-banner.jpg" />
        <section className="instructor-section">
              <FeatureCourse />
        </section>
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default ChiefGuests;
