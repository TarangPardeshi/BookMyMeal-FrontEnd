import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Css/Main.css";
import Navbar from "../Homecomponants/Navbar";
import Footer from "../Homecomponants/Footer";

const BookingList = () => {
  const [quickAddBookings, setQuickAddBookings] = useState([]);
  const [bulkBookings, setBulkBookings] = useState([]);
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [countdown, setCountdown] = useState(30); 
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    fetchQuickAddBookings();
    fetchBulkBookings();
    // Retrieve disabled buttons state from local storage
    const savedDisabledButtons = JSON.parse(localStorage.getItem('disabledButtons')) || {};
    setDisabledButtons(savedDisabledButtons);
  }, []);

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  useEffect(() => {
    localStorage.setItem('disabledButtons', JSON.stringify(disabledButtons));
  }, [disabledButtons]);

  const fetchQuickAddBookings = () => {
    axios.get('/booked-meals')
      .then(response => setQuickAddBookings(response.data))
      .catch(error => console.error('Error fetching quick add bookings:', error));
  };

  const fetchBulkBookings = () => {
    axios.get('/bookings')
      .then(response => setBulkBookings(response.data))
      .catch(error => console.error('Error fetching bulk bookings:', error));
  };

  const cancelQuickAddBooking = bookingId => {
    axios.delete(`/booked-meals/${bookingId}`)
      .then(response => {
        setQuickAddBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
        toast.success('Your booking has been canceled successfully.');
      })
      .catch(error => console.error('Error cancelling quick add booking:', error));
  };

  const cancelBulkBooking = bookingId => {
    axios.delete(`/bookings/${bookingId}`)
      .then(response => {
        setBulkBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
        toast.success('Your booking has been canceled successfully.');
      })
      .catch(error => console.error('Error cancelling bulk booking:', error));
  };

  const formatDate = date => {
    const formattedDate = new Date(date);
    return formattedDate.toDateString();
  };

  const handleViewQR = booking => {
    // Check if the timer has already started for this booking
    if (disabledButtons[booking.id]?.timerStarted) {
      setShowQRModal(true);
      setSelectedBooking(booking);
      return;
    }

    setSelectedBooking(booking);
    setShowQRModal(true);
    setCountdown(30);

    const newTimer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          clearInterval(newTimer);
          setShowQRModal(false);
          setDisabledButtons(prevState => {
            const updatedState = { ...prevState, [booking.id]: { disabled: true, timerStarted: true } };
            localStorage.setItem('disabledButtons', JSON.stringify(updatedState));
            return updatedState;
          });
        }
        return prevCountdown - 1;
      });
    }, 1000);

    setTimer(newTimer);
    setDisabledButtons(prevState => ({
      ...prevState,
      [booking.id]: { ...prevState[booking.id], timerStarted: true }
    }));
  };

  return (
    <div>
      <Navbar />
      <div className='admin-content'>
        <h2 className='admin-title'>Booking List</h2>
        <div className='admin-table'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Employee ID</th>
                <th>Actions</th>
                <th>QR Code</th>
              </tr>
            </thead>
            <tbody>
              {quickAddBookings.map(booking => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{formatDate(booking.date)}</td>
                  <td>{formatDate(booking.date)}</td>
                  <td>{booking.employeeId}</td>
                  <td>
                    <button onClick={() => cancelQuickAddBooking(booking.id)}>Cancel</button>
                  </td>
                  <td>
                    <button onClick={() => handleViewQR(booking)} disabled={disabledButtons[booking.id]?.disabled}>View QR</button>
                  </td>
                </tr>
              ))}
              {bulkBookings.map(booking => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{formatDate(booking.startDate)}</td>
                  <td>{formatDate(booking.endDate)}</td>
                  <td>{booking.employeeId}</td>
                  <td>
                    <button onClick={() => cancelBulkBooking(booking.id)}>Cancel</button>
                  </td>
                  <td>
                    <button onClick={() => handleViewQR(booking)} disabled={disabledButtons[booking.id]?.disabled}>View QR</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />

      {showQRModal && selectedBooking && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowQRModal(false)}>&times;</span>
            <QRCode 
              value={`Booking ID: ${selectedBooking.id}\nStart Date: ${formatDate(selectedBooking.startDate || selectedBooking.date)}\nEnd Date: ${formatDate(selectedBooking.endDate || selectedBooking.date)}\nEmployee ID: ${selectedBooking.employeeId}`} 
            />
            <div>QR code will close in {countdown} seconds.</div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default BookingList;
