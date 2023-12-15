import ProtoTypes from "prop-types";

function PopularCourse({ course, heading }) {
  return (
    <section className="popular-course-section">
      <div className="container">
        <div className="row mt-120">
          <div className=" col-md-6 " style={{display:"flex",alignItems:"center"}}>
            <div className="ab-thumb">
              <img src="assets/images/abt-kahe.jpg" alt="" />
            </div>
          </div>
          <div className=" col-md-6">
            <div className="ab-content">
              <h3 className="ab-content_kahe">About KAHE</h3>
              <p>Karpagam Academy of Higher Education (KAHE) established under Section 3 of UGC Act, 1956 is approved by Ministry of Human Resource Development, Government of India. Promoter Dr. R. Vasanthakumar is the president of Karpagam Charity Trust (KCT) and he is a Philanthropist, Industrialist, Entrepreneur and Culture Promoter.</p>
              <p>Contemporary infrastructure, Modern teaching methodologies, Career oriented training, excellent placements and the finest faculty have always been Karpagams’ hallmark. Besides technical expertise, KAHE has made a mark since its inception by developing communication and soft skills, ensuring enlightening knowledge, extending holistic education and creating a strong value system. Today, with strength of 6500 students and 750 teaching & non-teaching staff, KAHE is setting new benchmarks in the educational sphere.</p>
              <a className="bisylms-btn" href="https://kahedu.edu.in/" target="blank">
                Know More
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-120  flex-md-row-reverse">       
          <div className=" col-md-6" style={{display:"flex",alignItems:"center"}}>
            <div className="ab-thumb">
              <img src="assets/images/abt-02.jpg" alt="" />
            </div>
          </div>
          <div className=" col-md-6 ">
            <div className="ab-content">
              <h3>About ICRAMST'24 </h3>
              <p>The SERB Sponsored International Conference on Recent Advancements in Materials Science and Technology  (ICRAMST'24) intended to provide a common platform for knowledge sharing among Researchers, Academicians, Practitioners and Industrialists in the areas related to Science, Engineering and Technology. It provides a forum for discussing the most recent innovations, trends, experiences and concerns.</p>
              <p>It will also stimulate efforts to integrate the latest approaches to strengthen and help in shaping its future by fostering communication among participants. The conference will also include keynote addresses by renowned Academicians, Scientists, and Industrialists from the Leading organizations. The conference will provide the authors and listeners with opportunities for National and International collaboration and networking among the Institutions from India and abroad for promoting research and developing technologies. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

PopularCourse.propTypes = {
  course: ProtoTypes.bool,
  heading: ProtoTypes.bool,
};

export default PopularCourse;
