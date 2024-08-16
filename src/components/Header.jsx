import { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ onPatientsClick }) => {
  const [activeNav, setActiveNav] = useState("Overview");

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    if (navItem === "Patients") {
      onPatientsClick();
    }
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img
          src="/images/TestLogo@2x.png"
          alt="Tech.Care Logo"
          className="logo"
        />
      </div>
      <nav className="navigation">
        <ul>
          <li
            className={`nav-item ${activeNav === "Overview" ? "active" : ""}`}
            onClick={() => handleNavClick("Overview")}
          >
            <img
              src="/images/home_FILL0_wght300_GRAD0_opsz24/home_FILL0_wght300_GRAD0_opsz24@2x.png"
              alt="Overview Icon"
              className="nav-icon"
            />
            <a href="#">Overview</a>
          </li>
          <li
            className={`nav-item ${activeNav === "Patients" ? "active" : ""}`}
            onClick={() => handleNavClick("Patients")}
          >
            <img
              src="/images/group_FILL0_wght300_GRAD0_opsz24/group_FILL0_wght300_GRAD0_opsz24@2x.png"
              alt="Patients Icon"
              className="nav-icon"
            />
            <a href="#">Patients</a>
          </li>
          <li
            className={`nav-item ${activeNav === "Schedule" ? "active" : ""}`}
            onClick={() => handleNavClick("Schedule")}
          >
            <img
              src="/images/calendar_today_FILL0_wght300_GRAD0_opsz24/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png"
              alt="Schedule Icon"
              className="nav-icon"
            />
            <a href="#">Schedule</a>
          </li>
          <li
            className={`nav-item ${activeNav === "Message" ? "active" : ""}`}
            onClick={() => handleNavClick("Message")}
          >
            <img
              src="/images/chat_bubble_FILL0_wght300_GRAD0_opsz24/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png"
              alt="Message Icon"
              className="nav-icon"
            />
            <a href="#">Message</a>
          </li>
          <li
            className={`nav-item ${
              activeNav === "Transactions" ? "active" : ""
            }`}
            onClick={() => handleNavClick("Transactions")}
          >
            <img
              src="/images/credit_card_FILL0_wght300_GRAD0_opsz24/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png"
              alt="Transactions Icon"
              className="nav-icon"
            />
            <a href="#">Transactions</a>
          </li>
        </ul>
      </nav>
      <div className="profile-section">
        <img
          src="/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          alt="Dr. Jose Simmons"
          className="profile-pic"
        />
        <div className="profile-info">
          <span>Dr. Jose Simmons</span>
          <small>General Practitioner</small>
        </div>
        <img
          src="/images/settings_FILL0_wght300_GRAD0_opsz24@2x.png"
          alt="Settings Icon"
          className="settings-icon"
        />
        <img
          src="/images\more_vert_FILL0_wght300_GRAD0_opsz24@2x.png"
          alt="Settings Icon"
          className="settings-icon"
        />
      </div>
    </header>
  );
};

// Add PropTypes validation
Header.propTypes = {
  onPatientsClick: PropTypes.func.isRequired,
};

export default Header;
