import React, { useState } from "react";
import logo from "../Images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const FogptPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const validateEmail = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const validateOtp = () => {
    const newErrors = {};
    if (!otp) {
      newErrors.otp = "OTP is required";
    }
    return newErrors;
  };

  const sendOtp = (email) => {
    // Mock function to simulate sending OTP
    console.log(`Sending OTP to ${email}`);
    return true; // Assuming OTP sent successfully
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateEmail();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      if (sendOtp(email)) {
        console.log("OTP sent successfully");
        setIsOtpSent(true);
      } else {
        setErrors({ form: "Failed to send OTP. Please try again." });
      }
    }
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateOtp();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Simulate OTP verification
      if (otp === "123456") {
        console.log("OTP verified successfully");
        navigate("/Calender");
      } else {
        setErrors({ otp: "Invalid OTP" });
      }
    }
  };

  return (
    <div className="mt-0">
      <section className="login-content">
        <div className="login-content-lt"></div>
        <div className="login-content-rt">
          <div className="login-box">
            <form
              className="login-form"
              onSubmit={isOtpSent ? handleOtpSubmit : handleEmailSubmit}
            >
              <div className="logo-wrapper">
                <img src={logo} alt="Rishabh Software" />
                <span>Meal Facility</span>
              </div>
              <h3 className="login-head">Sign in to your account</h3>
              <p className="login-text">
                Enter your email to receive OTP for login.
              </p>
              <div className="form-group">
                <label className="control-label">Email</label>
                <div className="input-addon">
                  <input
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    type="email"
                    placeholder="Enter Your Email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isOtpSent}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>
              {isOtpSent && (
                <div className="form-group">
                  <label className="control-label">OTP</label>
                  <div className="input-addon">
                    <input
                      className={`form-control ${
                        errors.otp ? "is-invalid" : ""
                      }`}
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    {errors.otp && (
                      <div className="invalid-feedback">{errors.otp}</div>
                    )}
                  </div>
                </div>
              )}
              {errors.form && (
                <div className="alert alert-danger">{errors.form}</div>
              )}
              <div className="form-group btn-container">
                <button className="btn btn-xl btn-primary" type="submit">
                  {isOtpSent ? "Verify OTP" : "Send OTP"}
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-group mb-0">
                  <label className="custom-checkbox mb-0">
                    <Link to="/register" className="form-link">
                      Click Here for Register
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FogptPassword;
