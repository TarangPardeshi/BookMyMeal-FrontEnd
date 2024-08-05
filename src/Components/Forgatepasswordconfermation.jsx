import React, { useState } from "react";
import logo from "../Images/logo.svg";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = "New Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (newPassword !== confirmPassword) {
      newErrors.match = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Implement the logic to change the password here
      console.log("Password changed successfully");
      navigate("/");
    }
  };

  return (
    <div className="mt-0">
      <section className="login-content">
        <div className="login-content-lt"></div>
        <div className="login-content-rt">
          <div className="login-box">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="logo-wrapper">
                <img src={logo} alt="Rishabh Software" />
                <span>Meal Facility</span>
              </div>
              <h3 className="login-head">Change your password</h3>
              <p className="login-text">
                Enter your new password to update your account.
              </p>
              <div className="form-group">
                <label className="control-label">New Password</label>
                <div className="input-addon">
                  <input
                    className={`form-control ${
                      errors.newPassword ? "is-invalid" : ""
                    }`}
                    type="password"
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {errors.newPassword && (
                    <div className="invalid-feedback">{errors.newPassword}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="control-label">Confirm Password</label>
                <div className="input-addon">
                  <input
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>
              {errors.match && (
                <div className="alert alert-danger">{errors.match}</div>
              )}
              <div className="form-group btn-container">
                <button className="btn btn-xl btn-primary" type="submit">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
