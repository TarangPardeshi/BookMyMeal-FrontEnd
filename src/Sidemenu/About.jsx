import React from 'react';
import aboutImage from '../Images/about.jpg'; // Assuming the image is located in the 'Images' folder in your project directory
import Navbar from '../Homecomponants/Navbar';
import Footer from '../Homecomponants/Footer';

const AboutUs = () => {
    return (<>
        <Navbar />
        <section className="about-us" id="about">
            
            <div className="about-content">
                <h2>About Us</h2>
                <img src={aboutImage} alt="Our Facility or Team" className="about-image" />
                <div className="about-description">
                    <p>
                        Welcome to [Your Meal Facility Name], where we offer a wide range of delicious and healthy meals prepared with the freshest ingredients. Our mission is to provide convenient and tasty food options for everyone. We are committed to quality, sustainability, and exceptional customer service.
                    </p>
                    <p>
                        Our values are centered around:
                        <ul>
                            <li>Quality: We use only the finest ingredients to prepare our meals.</li>
                            <li>Sustainability: We strive to minimize our environmental impact through sustainable practices.</li>
                            <li>Customer Satisfaction: We are dedicated to providing excellent service and ensuring our customers are happy.</li>
                        </ul>
                    </p>
                    <p>
                        Established in [Year], we have been serving the community with a passion for food and hospitality. Our team of experienced chefs and friendly staff are here to make your dining experience memorable. Whether you're looking for a quick bite or catering for a special event, we have you covered.
                    </p>
                    <p>
                        Visit us at [Your Location], and let us serve you a meal you'll never forget. Thank you for choosing [Your Meal Facility Name]!
                    </p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default AboutUs;
