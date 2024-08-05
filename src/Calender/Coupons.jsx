// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import QRCode from 'react-qr-code';
// import "../Css/Main.css";
// import Navbar from "../Homecomponants/Navbar";
// import Footer from "../Homecomponants/Footer";

// const Coupon = () => {
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBookingDetails();
//   }, []);

//   const fetchBookingDetails = () => {
//     axios.get('/booked-meals')
//       .then(response => {
//         setBookingDetails(response.data);
//         setLoading(false);
//       })
//       .catch(error => console.error('Error fetching booking details:', error));
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!bookingDetails) {
//     return <div>No booking details available.</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className='coupon-content'>
//         <h2 className='coupon-title'>Coupon</h2>
//         <div className='coupon-details'>
//           <p>Booking ID: {bookingDetails.id}</p>
//           <p>Date: {bookingDetails.date}</p>
//           <p>Employee ID: {bookingDetails.employeeId}</p>
//           <div className='qr-code'>
//             <QRCode value={JSON.stringify(bookingDetails)} />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Coupon;
