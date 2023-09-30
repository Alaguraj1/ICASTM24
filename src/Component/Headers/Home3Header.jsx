import { useState } from "react";
import useWindowPosition from "../../Hooks/useWindowPosition";
import { Link } from "react-router-dom";

function Home3Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeMobileSubMenu, setActiveSubMobileMenu] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [filter, setActiveFilter] = useState("Explore");

  const windowPosition = useWindowPosition();

  const handleFilter = (e) => {
    setActiveFilter(e.target.innerText);
  };
  const menuClick = (() => {
    window.scrollTo(0,0)
  })
  return (
    <header
      className={` header-03  sticky ${windowPosition > 0 && "fix-header animated fadeInDown"
        } `}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* logo Start */}
              <Link className="navbar-brand" to="/">
                {/* <img src="assets/images/ICASTM-Logo.png" alt="" /> */}
                <h3 className="logo-head">ICRAMST</h3>
                <p className="logo-para"> International Conference on Recent<br/> Advancements in Materials Science and Technology </p>

              </Link>
              {/* logo End */}

              {/* Moblie Btn Start */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fal fa-bars"></i>
              </button>
              {/* Moblie Btn End */}

              {/* Nav Menu Start */}
              <div
                className="collapse navbar-collapse"
                style={{ display: activeMobileMenu && "block" }}
              >
                <ul className="navbar-nav">
                  <li
                    className="menu-item-has-children"
                    onClick={() => {menuClick()}}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className="menu-item-has-children"
                    name="about"
                    onClick={() => {menuClick()}}
                  >
                    {/* <a>Pages</a> */}
                    <Link to="/about">About</Link>
                  </li>

                  <li className="menu-item-has-children"   onClick={() => {menuClick()}}>
                    <Link to="/chief-guests">Chief Guests</Link>
                  </li>

                  <li className="menu-item-has-children"  onClick={() => {menuClick()}}>
                    <Link to="/call-for-papers">Call For Papers</Link>
                  </li>

                  <li className="menu-item-has-children"   onClick={() => {menuClick()}}>
                    <Link to="/registration">Registration</Link>
                  </li>

                  <li
                    className="menu-item-has-children"
                    onClick={() => {menuClick()}}
                  >
                    <Link to="/committee">Committee</Link>
                  </li>
                  <li   className="menu-item-has-children" onClick={() => {menuClick()}}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Nav Menu End  */}

              {/* Join Btn  */}
              <Link to="https://forms.gle/xDV8Wu4WwP5mQq5e7" className="join-btn" target="blank">
                Registration
              </Link>
              {/* Join Btn  */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home3Header;
