import Home3Header from "../../Component/Headers/Home3Header";
import HomeThreeHero from "../../Component/Heros/HomeThreeHero";
import FeatureHome3 from "../../Component/Features/FeatureHome3";
import PopularTopics from "../../Component/Course/PopularTopics";
import FeatureCourse from "../../Component/Course/FeatureCourse";
import Footer from "../../Component/Footer/Footer";
import GotoTop from "../../Component/GotoTop";
import Event from "../../Component/Event/Event";
import PopularCourse from '../../Component/Course/PopularCourse'
// import Cta from "../../Component/Cta/Cta";



function Home() {
   return(
      <>
        <Home3Header />
        <HomeThreeHero />
        <FeatureHome3 />
        <div className="container">
          <h2 className=" text-center topic"> International Conference on Recent Advancements in Materials Science and Technology (ICRAMST)</h2>
        </div>
        <PopularCourse />
        <Event />
        <PopularTopics />
        <FeatureCourse />
        {/* <Cta /> */}
        <Footer />
        <GotoTop />
      </>
    );
  }
  
export default Home;
