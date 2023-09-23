import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Home3Header from "../../Component/Headers/Home3Header";
import HomeThreeHero from "../../Component/Heros/HomeThreeHero";
import FeatureHome3 from "../../Component/Features/FeatureHome3";
import CourseHome3 from "../../Component/Course/CourseHome3";
import FeatureCourse from "../../Component/Course/FeatureCourse";
// import CallAction from "../../Component/CallAction";
import Home3Footer from "../../Component/Footer/Home3Footer";
import GotoTop from "../../Component/GotoTop";
import Event from "../../Component/Event/Event";
import PopularCourse from '../../Component/Course/PopularCourse'
import Cta from "../../Component/Cta/Cta";



function Home() {
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
        <Home3Header />
        <HomeThreeHero />
        <FeatureHome3 />
        <div className="container">
          <h2 className=" text-center" style={{marginTop:"80px"}}>International Conference on Advancements in the Science and Technology of Materials (ICASTM’24)</h2>
        </div>
        <PopularCourse />
        <Event />
        <CourseHome3 />
        <FeatureCourse />
        {/* <CallAction /> */}
        <Cta />
        <Home3Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home;
