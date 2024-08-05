import React from 'react';
import Navbar from '../Homecomponants/Navbar';
import Footer from '../Homecomponants/Footer';

const PrivacyPolicy = () => {
    return (
        <>
        <Navbar />
        <div className="privacy-policy">
            <h2>Privacy Policy</h2>
            <p>
                Welcome to [Your Website Name]. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from [Website URL] (the “Site”).
            </p>
            <h3>1. Information We Collect</h3>
            <p>
                We collect personal information you provide directly to us. For example, we collect information when you create an account, participate in any interactive features of the Services, fill out a form, request customer support, or otherwise communicate with us.
            </p>
            <p>
                The types of personal information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.
            </p>
            <h3>2. How We Use Your Information</h3>
            <p>
                We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
            </p>
            <ul>
                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                <li>To improve our website in order to better serve you.</li>
                <li>To allow us to better service you in responding to your customer service requests.</li>
                <li>To administer a contest, promotion, survey or other site feature.</li>
                <li>To quickly process your transactions.</li>
            </ul>
            <h3>3. How We Protect Your Information</h3>
            <p>
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
            </p>
            
        </div>
        <Footer/>
        </>
    );
};

export default PrivacyPolicy;
