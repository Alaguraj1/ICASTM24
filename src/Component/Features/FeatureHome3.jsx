import { Link } from "react-router-dom";

function FeatureHome3() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="feature-item">
              <img src="assets/images/kahe-logo.jpg" alt="" />
              {/* <h4>
                About KAHE
              </h4>
              <p>
                Karpagam Academy of Higher Education (KAHE) established under Section 3 of UGC Act 
              </p>
              <a href="/about" className="bisylms-btn-3">
              Know More
              </a> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <img src="assets/images/s2.jpg" alt="" />
              {/* <h4>
              Call for Papers
              </h4>
              <p>Authors are invited to submit their original and unpublished work for the conference</p>
              <a href="/registration" className="bisylms-btn-3">
              Know More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureHome3;
