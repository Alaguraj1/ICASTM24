import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function HomeThreeHero() {
  return (
    <section className="hero-slider-section">
      <div className="hero-slider owl-carouse">
        <Swiper
          spaceBetween={30}
          speed={2000}
          effect={"fade"}
          navigation={true}
          modules={[EffectFade, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {/* Single Slider item  */}
          <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/banner-01.jpg)",
              }}
            >
              <div className="container">
                <div className="row">

                  <div className="col-lg-12">
                    <div className="slider-content text-center">
                      {/* <div className="sub animated">
                      </div> */}
                      <h3 className="animated">
                      SERB Sponsored International Conference on Recent Advancements in Materials<br/> Science and Technology (ICRAMST'24)
                      </h3>
                      <p className="banner-date">Date: 29 - 30, January 2024</p>
                      <p className="banner-place">Karpagam Academy of Higher Education, <br/>Coimbatore-641 021,<br/> Tamilnadu, India.</p>
                      <Link to="/registration" className="animated bisylms-btn-3">
                        Registration
                      </Link>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Single Slider item   */}
          {/* Single Slider item   */}
          <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/banner-02.jpg)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content text-center">
                      {/* <div className="sub animated">
                        Organize
                      </div> */}
                      <h3 className="animated">
                      SERB Sponsored International Conference on Recent Advancements in Materials<br/> Science and Technology (ICRAMST'24)
                      </h3>
                      <p className="banner-date">Date: 29 - 30, January 2024</p>
                      <p className="banner-place">Karpagam Academy of Higher Education,<br/> Coimbatore-641 021, <br/>Tamilnadu, India.</p>
                      <Link to="/registration" className="animated bisylms-btn-3">
                        Registration
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Single Slider item  */}
          {/* Single Slider item  */}
          {/* <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/home3/slider-4.jpg)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content">
                      <div className="sub animated">
                        Superior Acodemic Achievement & Mastery
                      </div>
                      <h3 className="animated">
                        An education product
                        <br /> like on other
                      </h3>
                      <Link to="#" className="animated bisylms-btn-3">
                        Let's Go
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* Single Slider item  */}
          {/*  Single Slider item   */}
          {/* <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/home3/slider-3.jpg)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content text-center">
                      <div className="sub animated">
                        Superior Acodemic Achievement & Mastery
                      </div>
                      <h3 className="animated">
                        Online Courses From
                        <br /> The World’s Top Publishers
                      </h3>
                      <Link to="#" className="animated bisylms-btn-3">
                        Browse Online Courses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* Single Slider item  */}
        </Swiper>
      </div>
    </section>
  );
}

export default HomeThreeHero;
