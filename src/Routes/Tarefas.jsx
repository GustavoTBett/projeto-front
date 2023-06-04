import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Tarefas = () => {
  const { date } = useParams();

  // Extract the day and month from the date parameter
  const [day, month] = date.split("-");

  const handlePreviousDay = () => {
    const currentDate = new Date(2023, month, day); // Get the current date
    currentDate.setDate(currentDate.getDate() - 1); // Subtract 1 day from the current date

    const dayPrevious = String(currentDate.getDate()).padStart(2, "0"); // Get the day and pad it with leading zero if necessary
    const monthPrevious = String(currentDate.getMonth()).padStart(2, "0"); // Get the month and pad it with leading zero if necessary

    const newDate = `${dayPrevious}-${monthPrevious}`; // Create the new date string in the "day-month" format

    window.location.href = `/app/tarefas-pendentes/${newDate}`;
  };

  const handleNextDay = () => {
    const currentDate = new Date(2023, month, day); // Get the current date
    currentDate.setDate(currentDate.getDate() + 1); // Subtract 1 day from the current date

    const dayNext = String(currentDate.getDate()).padStart(2, "0"); // Get the day and pad it with leading zero if necessary
    const monthNext = String(currentDate.getMonth()).padStart(2, "0"); // Get the month and pad it with leading zero if necessary

    const newDate = `${dayNext}-${monthNext}`; // Create the new date string in the "day-month" format

    window.location.href = `/app/tarefas-pendentes/${newDate}`;
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={handlePreviousDay}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">{`${day}/${month}`}</Typography>
        <IconButton onClick={handleNextDay}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Box width="80%" border="1px solid #ccc" p={2}>
        {/* Content for the box */}
        {/* Replace the following line with your content */}
        <Typography>
          This is the content for the box for {day}/{month}.
        </Typography>
      </Box>
    </Box>
  );
};

export default Tarefas;
