import React from 'react';

const ContactForm = ({ handleClose }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Contact Us</h2>
                {/* Include your Contact Form content here */}
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">Submit</button>
                </form>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
};

export default ContactForm;
