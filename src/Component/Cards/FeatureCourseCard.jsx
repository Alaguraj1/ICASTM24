import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function FeatureCourseCard({ course, className, swiper }) {
  const {
    img,
    title,
    heading,
  } = course;

  return (
    <>
      <div className={!swiper ? "col-lg-4 col-md-6" : ""}>
        <div className={`${className ? className : "feature-course-item-3"}`}>
          <div className="fcf-thumb">
            <img src={img} alt="" />
            {/* <Link className="enroll" to="/chief-guests">
              Enroll Now
            </Link> */}
          </div>
          <div className="fci-details">
            <h4>
              {heading}
            </h4>
            <p style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: title }}></p>
          </div>
        </div>
      </div>
     
    </>
  );
}

FeatureCourseCard.propTypes = {
  course: ProtoTypes.object,
  className: ProtoTypes.string,
  swiper: ProtoTypes.bool,
};

export default FeatureCourseCard;
