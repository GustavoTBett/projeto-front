import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton, Grid, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Tarefas = () => {
  const { date } = useParams();

  const [day, month] = date.split("-");

  const handlePreviousDay = () => {
    const currentDate = new Date(2023, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1);

    const dayPrevious = String(currentDate.getDate()).padStart(2, "0");
    const monthPrevious = String(currentDate.getMonth() + 1).padStart(2, "0");

    const newDate = `${dayPrevious}-${monthPrevious}`;

    window.location.href = `/app/tarefas-pendentes/${newDate}`;
  };

  const handleNextDay = () => {
    const currentDate = new Date(2023, month - 1, day);
    currentDate.setDate(currentDate.getDate() + 1);

    const dayNext = String(currentDate.getDate()).padStart(2, "0");
    const monthNext = String(currentDate.getMonth() + 1).padStart(2, "0");

    const newDate = `${dayNext}-${monthNext}`;

    window.location.href = `/app/tarefas-pendentes/${newDate}`;
  };

  const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  const getDateOfWeek = (date) => {
    const parts = date.split("-");
    const day = new Date(parts[2], parts[1], parts[0]).getDay();
    return daysOfWeek[day];
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Calendário semanal
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1.7}>
            <Paper>
              <Grid>
                <Typography variant="h6" gutterBottom>
                  {daysOfWeek[0]}
                </Typography>
              </Grid>
              {/* Place your content or activities for Sunday here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1.7}>
            <Paper>
              <Grid>
                <Typography variant="h6" gutterBottom>
                {daysOfWeek[1]}
                </Typography>
              </Grid>
              {/* Place your content or activities for Monday here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1.7}>
            <Paper>
              <Grid>
                <Typography variant="h6" gutterBottom>
                {daysOfWeek[2]}
                </Typography>
              </Grid>
              {/* Place your content or activities for Tuesday here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1.7}>
            <Paper>
              <Grid>
                <Typography variant="h6" gutterBottom>
                {daysOfWeek[3]}
                </Typography>
              </Grid>
              {/* Place your content or activities for Wednesday here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1.7}>
            <Paper>
              <Grid>
                <Typography variant="h6" gutterBottom>
                {daysOfWeek[4]}
                </Typography>
              </Grid>
              {/* Place your content or activities for Thursday here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1.7}>
            <Paper>
              <Grid>
                <Typography variant="h6" gutterBottom>
                {daysOfWeek[5]}
                </Typography>
              </Grid>
              {/* Place your content or activities for Friday here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1.7}>
            <Paper>
              <Grid>
                <Typography variant="h6" gutterBottom>
                {daysOfWeek[6]}
                </Typography>
              </Grid>
              {/* Place your content or activities for Saturday here */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tarefas;
