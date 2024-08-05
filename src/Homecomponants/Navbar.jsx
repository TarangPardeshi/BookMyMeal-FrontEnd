/* eslint-disable jsx-a11y/anchor-is-valid */
// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
import ChangePassword from '../Dropdown/ChangePassword'; 
import ConfirmationModal from '../Dropdown/Logout';
import logo from '../Images/logo-white.svg';

const Navbar = () => {
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false); 
  const [logoutModalOpen, setLogoutModalOpen] = useState(false); 

  const toggleAdminDropdown = () => {
    setAdminDropdownOpen(!adminDropdownOpen);
  };

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen);
  };

  const toggleChangePassword = () => {
    setChangePasswordOpen(!changePasswordOpen);
  };

  const toggleLogoutModal = () => {
    setLogoutModalOpen(!logoutModalOpen);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    window.location.href = '/'; 
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="container head d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <div className="logoW-wrapper">
              <img src={logo} alt="Rishabh Software" className="logo-img" />
              <span className="logo-text">Meal Facility</span>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Booking" className="nav-link">
                  Booking List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Calender" className="nav-link">
                  Calendar
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex align-items-center">
              <ul className="app-nav d-flex align-items-center">
                {/* <li className="dropdown">
                  <a
                    className="app-nav__item notification-num"
                    href="#"
                    aria-label="Show notifications"
                  >
                    <FontAwesomeIcon icon={faBell} />
                    <span className="num">5</span>
                  </a>
                </li> */}
                <li className="dropdown">
                  <Link
                    className="app-nav__item dropdown-toggle"
                    to="#"
                    onClick={toggleAdminDropdown}
                    aria-label="Open Profile Menu"
                  >
                    Account Actions
                  </Link>
                  <ul className={`dropdown-menu ${adminDropdownOpen ? 'show' : ''}`}>
                    <li>
                      <button className="dropdown-item" onClick={toggleChangePassword}>
                        Change Password
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={toggleLogoutModal}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    className="app-nav__item dropdown-toggle"
                    to="#"
                    onClick={toggleInfoDropdown}
                    aria-label="Open Info Menu"
                  >
                    More Info
                  </Link>
                  <ul className={`dropdown-menu ${infoDropdownOpen ? 'show' : ''}`}>
                    <li>
                      <Link to="/About" className="dropdown-item">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/TermsAndConditions" className="dropdown-item">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/PrivacyPolicy" className="dropdown-item">
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {changePasswordOpen && <ChangePassword onClose={toggleChangePassword} />}
      {logoutModalOpen && (
        <ConfirmationModal
          message="Are you sure you want to logout?"
          onConfirm={handleLogout}
          onCancel={toggleLogoutModal}
        />
      )}
    </nav>
  );
};

export default Navbar;
