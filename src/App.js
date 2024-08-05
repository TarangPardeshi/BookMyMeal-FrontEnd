import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homecomponants/Home';
import Booking from './Components/Booking';
import Login from './Components/Login';
import Register from './Components/Register';
import Forgate from './Components/Forgate';
import About from './Sidemenu/About';
import PrivacyPolicy from './Sidemenu/PrivacyPolicy';
import TermsAndConditions from './Sidemenu/TermsAndConditions';
import ChangePassword from './Dropdown/ChangePassword';
import Logout from './Dropdown/Logout';
import CouponPopup from './Calender/Coupons'
import Forgatepassword from './Components/Forgatepasswordconfermation'

const App = () => {
  return (
    <Router>
      <div className="App">
      
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forgate" element={<Forgate />} />
        <Route path="/Calender" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/About" element={<About />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/coupons" element={<CouponPopup />} />
        <Route path="/Forgatepassword" element={<Forgatepassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;