import React, { useRef } from "react";
import "./Sidebar.css";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
function Sidebar() {
  const collapseRef = useRef(null);
  const handleLinksClick = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="sidebar">
      <nav className="nav flex-column navbar-expand-lg navbar-light bg-light">
        <button
          type="button"
          className="cus-btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#extraCanvas"
          aria-controls="extraCanvas"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu /> &nbsp; Menu
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="extraCanvas"
          aria-labelledby="extraCanvasLabel"
          ref={collapseRef}
        >
          <div className="offcanvas-body">
            {/* Start Header And Close Button */}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="extraCanvasLabel">
                {" "}
              </h5>
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <AiFillCloseCircle
                  style={{ color: "#0068b3", fontSize: "22px" }}
                />
              </button>
            </div>

            <ul>
              <li
                style={{
                  backgroundColor: "#0068B3",
                  padding: "5px",
                  color: "#fff",
                }}
                className="sidebar-head"
              >
                <h2>Investor</h2>
                <h2>Relations</h2>
                <p>
                  <BiPhoneCall />
                  :+996 11 413 4444
                </p>
                <p>
                  <MdAlternateEmail />
                  :IR@elhokair.com
                </p>
              </li>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <li className="nav-item">
                <Link to="/" onClick={handleLinksClick}>
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" onClick={handleLinksClick}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/board&managment" onClick={handleLinksClick}>
                  Board&Managment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chart" onClick={handleLinksClick}>
                  Chart
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/investorcalculator" onClick={handleLinksClick}>
                  Investor Caculator
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/majorshareholders" onClick={handleLinksClick}>
                  Major Shareholders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/negotiated-deals" onClick={handleLinksClick}>
                  Negotiated Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/financial-statments" onClick={handleLinksClick}>
                  Financial Statments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Financial Ratios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Financial Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Investor Presentations
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Business Segments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Corporate Actions
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Analyst Coverage
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Investor Calculator
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Disclosers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/overview" onClick={handleLinksClick}>
                  Subscription Center
                </Link>
              </li>

              <br />
              <br />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
