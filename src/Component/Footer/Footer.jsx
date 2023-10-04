import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Footer({ getStart }) {
  return (
    <footer className={`footer-1 ${!getStart && "pd-top-90"}`}>

      {/* Copyrigh  */}
      <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              <p>
              © 2023 ICRAMST'24. All rights reserved | Concept by{" "}
                <Link to="https://irepute.in/" target="blank"> repute</Link>
              </p>
            </div>
          </div>
        </div>
        {/* Copyrigh  */}
    </footer>
  );
}

Footer.propTypes = {
  getStart: ProtoTypes.bool,
};

export default Footer;
