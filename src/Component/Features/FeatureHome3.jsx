import { Link } from "react-router-dom";

function FeatureHome3() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-6">
            <div className="feature-item">
              <img src="assets/images/kahe-logo.jpg" alt="logo-1" />
            </div>
          </div>
          <div className="col-md-3  col-lg-6">
            <div className="feature-item">
              <img src="assets/images/s2.jpg" alt="logo-2" />
            </div>
          </div>
          <div className="col-md-3  col-lg-6">
            <div className="feature-item">
              <img src="assets/images/header-logo-3.jpg" alt="logo-3" />
            </div>
          </div>
          <div className="col-md-3  col-lg-6">
            <div className="feature-item">
              <p className="feature-item-para">Publication Partner :</p>
              <img src="assets/images/header-logo-4.jpg" alt="logo-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureHome3;
