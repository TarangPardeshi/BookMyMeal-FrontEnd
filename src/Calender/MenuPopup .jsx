import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';

const MenuPopup = ({ menu, onClose }) => {
  if (!menu) {
    return null;
  }

  return (
    <Paper className="menu-popup" elevation={3}>
      <Box p={2}>
        <Typography variant="h6">Meal Of The Day</Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <div className="menu-section-left">
            <Typography variant="subtitle1">Lunch</Typography>
            <Typography variant="body1">{menu.lunch || "No lunch menu available"}</Typography>
          </div>
          <div className="menu-section-right">
            <Typography variant="subtitle1">Dinner</Typography>
            <Typography variant="body1">{menu.dinner || "No dinner menu available"}</Typography>
          </div>
        </Box>
        <Button variant="contained" color="primary" onClick={onClose} fullWidth mt={2}>Close</Button>
      </Box>
    </Paper>
  );
};

export default MenuPopup;
