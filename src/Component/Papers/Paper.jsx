import { Link } from "react-router-dom";
import CourseHome3 from "../Course/CourseHome3";

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
                            Authors are invited to submit their original and unpublished work for the conference. All the abstracts of the accepted/presented papers will be published in the conference proceedings (with ISBN). After a double-blind review of the full-length paper the selected manuscripts will be published in Web of Science, Scopus, INSPEC and Chemical Abstracts Service indexed conference proceedings.
                            We are also planning to publish the selected papers in SCI, SCOPUS indexed Journals based on the quality and merit of the work.
                            The theme of the conference covers a broad spectrum of Materials Science.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Paper;
