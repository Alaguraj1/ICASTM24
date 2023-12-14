// import { Link } from "react-router-dom";
// import CourseHome3 from "../Course/CourseHome3";

function Paper() {
    return (
        <section
            className="paper-section"
        >
            <div className="container">
                <div className="overview-content row">
                    <div className="col-lg-4">
                        <img src="/assets/images/nanomaterials.jpg" alt="" className="nanomaterial" />
                    </div>
                    <div className="col-lg-8 call-paper">
                        <h3>Call for Papers</h3>
                        <p>
                            Authors are invited to submit their original and unpublished work for the conference. All the abstracts of the accepted/presented papers will be published in the conference proceedings (with ISBN). After a double-blind review of the selected full-length paper will be published in Springer
                            (Proceedings) Book series (Scopus indexed), Note: No publication fee. The theme of the conference covers a broad spectrum of Materials Science.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Paper;
