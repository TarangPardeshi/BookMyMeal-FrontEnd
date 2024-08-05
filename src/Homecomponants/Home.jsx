import React, { useState } from 'react';
import CalendarComponent from '../Calender/Calender';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="calendar-section">
          {/* <h2>Calendar</h2> */}
          <CalendarComponent onDateChange={handleDateChange} selectedDate={selectedDate} />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
