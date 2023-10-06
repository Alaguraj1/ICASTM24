import { course } from "../../Data/course";
import FeatureCourseCard from "../Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
function FeatureCourse() {
  return (
    <section
      className="feature-course-section-3"
      style={{ backgroundImage: "url(assets/images/home3/2.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ textAlign: "center" }}>
            <h2 className="sec-title">
              Chief Guests & Keynote Speakers
            </h2>
          </div>
        </div>
        <div className="row">
          {course?.map((cours) => (
            <FeatureCourseCard key={cours.id} course={cours} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCourse;
