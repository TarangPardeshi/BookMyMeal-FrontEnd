import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../Css/Main.css';
import Navbar from '../Homecomponants/Navbar';
import AddBooking from './AddBooking';
import QuickAddMeal from './QuickAddMeal';
import Calendar from 'react-calendar';
import axios from 'axios';
import MenuPopup from './MenuPopup ';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:8080/api';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn('No token found in localStorage');
  }
  return config;
}, error => {
  return Promise.reject(error);
});

const CalendarComponent = ({ onDateChange, selectedDate }) => {
  const [date, setDate] = useState(selectedDate);
  const [bookings, setBookings] = useState([]);
  const [quickAddVisible, setQuickAddVisible] = useState(true);
  const [holidays] = useState([]);
  const [bookedMeals, setBookedMeals] = useState([]);
  const [bulkBookingVisible, setBulkBookingVisible] = useState(false);
  const [bulkBookings] = useState([]);
  const [menuPopupVisible, setMenuPopupVisible] = useState(false);
  const [menu, setMenu] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [bulkBookingStartDate, setBulkBookingStartDate] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [bulkBookingEndDate, setBulkBookingEndDate] = useState(null);

  const weeklyMenu = {
    Monday: { lunch: 'AlooGobi Roti Rice Daal', dinner: 'AlooGobi Roti Rice Daal' },
    Tuesday: { lunch: 'ChanaMasala Roti Rice Daal', dinner: 'ChanaMasala Roti Rice Daal' },
    Wednesday: { lunch: 'AlooGobi Roti Rice Daal', dinner: 'AlooGobi Roti Rice Daal' },
    Thursday: { lunch: 'ChanaMasala Roti Rice Daal', dinner: 'ChanaMasala Roti Rice Daal' },
    Friday: { lunch: 'ChanaMasala Roti VegetablePulav', dinner: 'ChanaMasala Roti VegetablePulav' },
  };

  const onChange = date => {
    setDate(date);
    onDateChange(date);
  };

  const onAddBooking = booking => {
    axios.post('/bookings', booking)
      .then(response => {
        setBookings([...bookings, response.data]);
        setBookedMeals([...bookedMeals, new Date(booking.date)]);
        toast.success('Booking added successfully!');
      })
      .catch(error => {
        console.error('Error adding booking:', error);
        if (error.response && error.response.status === 403) {
          console.error('Forbidden request: ', error.response.data);
        }
      });
  };

  const onQuickAddMeal = () => {
    const localDate = new Date(date);
    const formattedDate = localDate.getFullYear() + '-' +
      String(localDate.getMonth() + 1).padStart(2, '0') + '-' +
      String(localDate.getDate()).padStart(2, '0');

    const newBooking = { date: formattedDate, employeeId: '1' };
    console.log('Adding booking:', newBooking);

    axios.post('/booked-meals', newBooking)
      .then(response => {
        setBookings([...bookings, response.data]);
        setBookedMeals([...bookedMeals, new Date(newBooking.date)]);
        toast.success('Quick booking added successfully!');
      })
      .catch(error => {
        console.error('Error adding quick booking:', error);
      });
  };

  useEffect(() => {
    const checkButtonVisibility = () => {
      const now = new Date();
      const tomorrow = new Date(date);
      tomorrow.setDate(date.getDate() + 1);
      tomorrow.setHours(20, 0, 0, 0);
      setQuickAddVisible(now < tomorrow);
    };

    checkButtonVisibility();
    const interval = setInterval(checkButtonVisibility, 1000 * 60);

    return () => clearInterval(interval);
  }, [date]);

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      const isHoliday = holidays.some(
        holiday => new Date(holiday.date).toDateString() === date.toDateString()
      );
      return day === 0 || day === 6 || isHoliday;
    }
    return false;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const isBooked = bookedMeals.some(
        bookedDate =>
          bookedDate.getFullYear() === date.getFullYear() &&
          bookedDate.getMonth() === date.getMonth() &&
          bookedDate.getDate() === date.getDate()
      );
      if (isBooked) {
        return 'react-calendar__tile--highlight';
      }
    }
    return null;
  };

  const showMenuPopup = (date) => {
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
    setMenu(weeklyMenu[dayOfWeek]);
    setMenuPopupVisible(true);
  };

  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="calendar-container">
            <h3 className="main-title">Calendar</h3>
            <Calendar
              onChange={onChange}
              value={date}
              tileDisabled={tileDisabled}
              tileClassName={tileClassName}
              onClickDay={showMenuPopup}
            />
          </div>
          <div className="button-container">
            {quickAddVisible && <QuickAddMeal onQuickAddMeal={onQuickAddMeal} />}
            <button className='view-coupon-button' onClick={() => setBulkBookingVisible(true)}>Book Meal</button>
          </div>
        </div>
      </div>
      <div>
        {menuPopupVisible && (
          <MenuPopup menu={menu} onClose={() => setMenuPopupVisible(false)} />
        )}

        {bulkBookingVisible && (
          <div className="modal">
            <div className="modal-content">
              <AddBooking onAddBooking={onAddBooking} setBulkBookingStartDate={setBulkBookingStartDate} setBulkBookingEndDate={setBulkBookingEndDate} />
              <button onClick={() => setBulkBookingVisible(false)}>Close</button>
            </div>
          </div>
        )}
        {bulkBookings.length > 0 && (
          <div>
            <h3>Bulk Bookings</h3>
            <ul>
              {bulkBookings.map(booking => (
                <li key={booking.id}>
                  {booking.date} - {booking.employeeId}
                </li>
              ))}
            </ul>
          </div>
        )}
                <ToastContainer />
      </div>
    </div>
  );
};

export default CalendarComponent;

