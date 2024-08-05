import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/Main.css";
import logo from "../Images/logo.svg";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          firstName: event.target[0].value,
          lastName: event.target[1].value,
          email: event.target[2].value,
          phoneNumber: event.target[3].value,
          password: event.target[4].value,
        }
      );

      if (response && response.data) {
        toast.success("Registration successful!");
        setTimeout(() => navigate("/"), 2000);  // Wait for 2 seconds before redirecting
      } else {
        setRegistrationError("Unexpected response format. Please try again.");
      }
    } catch (error) {
      setRegistrationError("Error registering user: " + error.message);
    }
  };

  return (
    <section className="login-content">
      <div className="login-content-lt"></div>
      <div className="login-content-rt">
        <div className="login-box">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="logo-wrapper">
              <img src={logo} alt="Rishabh Software" />
              <span>Meal Facility</span>
            </div>
            <h3 className="login-head-reg">Create an Account</h3>
            <div className="form-group">
              <label className="control-label">First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                autoFocus
                required
              />
            </div>
            <div className="form-group">
              <label className="control-label">Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label className="control-label">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label className="control-label">Phone Number</label>
              <input
                className="form-control"
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input
                id="password-field"
                className="form-control"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={`icon-eye ${
                  showPassword ? "icon-eye-close" : "icon-eye-open"
                } field-icon toggle-password`}
                onClick={togglePasswordVisibility}
              ></span>
            </div>
            <div className="form-group">
              <label className="control-label">Confirm Password</label>
              <input
                className={`form-control ${
                  !passwordsMatch ? "is-invalid" : ""
                }`}
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!passwordsMatch && (
                <div className="invalid-feedback">Passwords do not match</div>
              )}
            </div>
            {registrationError && (
              <div className="form-group">
                <div className="invalid-feedback">{registrationError}</div>
              </div>
            )}
            <div className="form-group mb-0">
              <div className="utility">
                <p>
                  <Link to="/" className="form-link">
                    Already Registered
                  </Link>
                </p>
              </div>
            </div>
            <div className="form-group btn-container">
              <button className="btn btn-xl btn-primary">Sign up</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default RegistrationForm;
