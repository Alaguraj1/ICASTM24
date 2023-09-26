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
        <div className='row'>
          <div className="col-lg-4 col-md-6">
            <div className="feature-course-item-3">
              <div className="fcf-thumb">
                <img src="assets/images/Praseetha.jpg" alt="" />
                <Link className="enroll" to="/chief-guests">
                  Enroll Now
                </Link>
              </div>
              <div className="fci-details">
                <h4>
                  Dr. P. K. Praseetha
                </h4>
                <p style={{ fontSize: "14px" }}><b>Professor and Head,  Department of Nanotechnology,</b><br/> Noorul Islam Centre for Higher Education, Nagercoil, India.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <img src="assets/images/kahe.jpg" alt="" className="kahe-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureCourse;
