import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { course } from "../../Data/course";
import { Link } from "react-router-dom";
function CourseHome3() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return "<span class=" + className + " myPagination" + "></span>";
    },
  };
  return (
    <section className="popular-course-section-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title mb-15">Popular Topics</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="course-item-3  row" style={{ padding: "50px 0px" }}>
              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Energy and Environment materials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Nanomaterials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Polymers and Composites
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Powder Metallurgy
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Composite Materials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Bio and soft matter
                </h5>
              </div>
              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Biorefining and Biofuels
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Drug Design
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Computational Materials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Materials for Biomedical applications
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Optical, Electronic and Magnetic materials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Super Conductors & Spintronics
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Crystals & Bulk materials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Thin films & Coatings
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Additive Manufacturing
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Materials Processing
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Sustainable Machining
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Building & Construction Materials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Power &  Storage Materials
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Catalysts, Sensors
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Solar energy, Batteries, Fuel Cells
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Hydrogen Energy
                </h5>
              </div>

              <div className="ci-item with-bg col-md-3 home_topics">
                <h5>
                  <i className="icon_menu-square_alt2"></i>
                  Structure and Properties of all Engineering Materials
                </h5>
              </div>

              <div className="ci-item  col-md-3 home_topics">
                <button className="home_topics_btn">
                  <Link to="/registration">View More Topics</Link>
                </button>
              </div>

              {/* </div> */}
            </div>
            {/* </Swiper> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseHome3;
