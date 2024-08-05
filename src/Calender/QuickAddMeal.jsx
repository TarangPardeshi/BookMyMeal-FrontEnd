import React from 'react';

const QuickAddMeal = ({ onQuickAddMeal }) => {
  return (
    <div className="quick-add-meal1">
     
      <button className="book-button"  onClick={onQuickAddMeal}>Quick Add Meal</button>
    </div>
  );
};

export default QuickAddMeal;
