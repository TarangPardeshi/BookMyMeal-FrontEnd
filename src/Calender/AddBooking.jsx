import React, { useState, useEffect } from 'react';
import { Checkbox, TextField, Button, Typography, FormControlLabel } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBooking = () => {
  const [isBulkBooking, setIsBulkBooking] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    // Fetch booked meals from the server or any other data source
    // Here you should replace this with actual logic to fetch booked meals
    // setBookedMeals(['2024-05-27', '2024-05-28']); // Example data
  }, []);

  const handleBulkBookingChange = event => setIsBulkBooking(event.target.checked);
  const handleStartDateChange = event => setStartDate(event.target.value);
  const handleEndDateChange = event => setEndDate(event.target.value);

  const getMinDate = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysToAdd = dayOfWeek === 0 ? 1 : dayOfWeek === 6 ? 2 : 0; // If today is Saturday or Sunday, set minimum selectable date to Monday
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + daysToAdd);
    return minDate.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3); // Allow selection within the next 3 months
    return maxDate.toISOString().split('T')[0];
  };

  const handleBooking = () => {
    const employeeId = '1';

    // Create booking request object
    const bookingRequest = { startDate, endDate, employeeId };

    // Validate the booking date(s)
    const currentDate = new Date();
    if (new Date(startDate) > new Date(endDate)) {
      toast.error('Start date cannot be after end date.', { className: 'toast-error' });
      return;
    }
    if (new Date(startDate) < currentDate) {
      toast.error('Start date must be in the future.', { className: 'toast-error' });
      return;
    }

    fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingRequest),
    })
      .then(response => {
        if (response.ok) {
          toast.success('Booking successful!');
        } else {
          throw new Error('Booking failed', { className: 'toast-error' });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Booking failed. Please try again later.', { className: 'toast-error' });
      });
  };

  return (
    <div className="add-booking">
      <Typography variant="h6">Add Booking</Typography>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={isBulkBooking}
              onChange={handleBulkBookingChange}
            />
          }
          label="Bulk Booking"
        />
      </div>
      {isBulkBooking && (
        <div>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            inputProps={{
              min: getMinDate(),
              max: getMaxDate(),
            }}
          />
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            inputProps={{
              min: startDate,
              max: getMaxDate(),
            }}
          />
        </div>
      )}
      <Button variant="contained" onClick={handleBooking}>Book Meal</Button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AddBooking;
