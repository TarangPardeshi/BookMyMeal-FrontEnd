import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Css/Main.css';
import logo from '../Images/logo.svg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const backendURL = "http://localhost:8080/api/auth";

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${backendURL}/login`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        }
      );
      if (response.data && response.data.jwt) {
        localStorage.setItem('token', response.data.jwt);
        toast.success('Signed in successfully!');
        setTimeout(() => setRedirect(true), 2000); // Wait for 2 seconds before redirecting
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Incorrect Username or Password.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  if (redirect) {
    return <Navigate to="/Calender" />;
  }

  return (
    <section className="login-content">
      <div className="login-content-lt"></div>
      <div className="login-content-rt">
        <div className="login-box">
          <form className="login-form" onSubmit={handleSignIn}>
            <div className="logo-wrapper">
              <img src={logo} alt="Rishabh Software" />
              <span>Meal Facility</span>
            </div>
            <h3 className="login-head">Sign in to your account</h3>
            <p className="login-text">Enter your credentials to access your account.</p>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label className="control-label">User Name</label>
              <div className="input-addon">
                <input
                  className="form-control"
                  type="text"
                  placeholder="User Name"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="icon-after icon-green">
                  <i className="icon-check"></i>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <div className="input-addon">
                <input
                  id="password-field"
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-group">
                <Link to="/Register" className="form-link">Click Here for Register</Link>
              </div>
              <div className="form-group">
                <div className="utility">
                  <p>
                    <Link to="/Forgate" className="form-link">Forgot Password?</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="form-group btn-container">
              <button className="btn btn-xl btn-primary" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default LoginForm;
