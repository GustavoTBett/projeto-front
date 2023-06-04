import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Tarefas = () => {
  const { date } = useParams();

  const [day, month] = date.split("-");

  const handlePreviousDay = () => {
    const currentDate = new Date(2023, month, day);
    currentDate.setDate(currentDate.getDate() - 1);

    const dayPrevious = String(currentDate.getDate()).padStart(2, "0");
    const monthPrevious = String(currentDate.getMonth()).padStart(2, "0");

    const newDate = `${dayPrevious}-${monthPrevious}`;

    window.location.href = `/app/tarefas-pendentes/${newDate}`;
  };

  const handleNextDay = () => {
    const currentDate = new Date(2023, month, day);
    currentDate.setDate(currentDate.getDate() + 1);

    const dayNext = String(currentDate.getDate()).padStart(2, "0");
    const monthNext = String(currentDate.getMonth()).padStart(2, "0");

    const newDate = `${dayNext}-${monthNext}`;

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
        {/* Conteúdo */}
        <Typography>
          This is the content for the box for {day}/{month}.
        </Typography>
      </Box>
    </Box>
  );
};

export default Tarefas;
